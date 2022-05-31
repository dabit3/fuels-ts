import { Interface } from '@fuel-ts/abi-coder';
import { NativeAssetId } from '@fuel-ts/constants';
import { Provider } from '@fuel-ts/providers';
import { TestUtils } from '@fuel-ts/wallet';
import { readFileSync } from 'fs';
import { join } from 'path';

import ContractFactory from './contract-factory';

describe('Contract Factory', () => {
  const createContractFactory = async () => {
    const provider = new Provider('http://127.0.0.1:4000/graphql');
    const wallet = await TestUtils.generateTestWallet(provider, [[5_000_000, NativeAssetId]]);
    const bytecode = readFileSync(
      join(__dirname, './storage-test-contract/out/debug/storage-test.bin')
    );
    const abi = JSON.parse(
      readFileSync(
        join(__dirname, './storage-test-contract/out/debug/storage-test-abi.json')
      ).toString()
    );
    const factory = new ContractFactory(bytecode, abi, wallet);

    return factory;
  };

  it('Creates a factory from inputs that can return call results', async () => {
    const factory = await createContractFactory();

    const contact = await factory.deployContract();

    expect(contact.interface).toBeInstanceOf(Interface);

    await contact.submit.initialize_counter(41);

    const submitResult = await contact.submit.increment_counter(1);
    expect(submitResult).toEqual(42n);

    const dryRunResult = await contact.dryRun.increment_counter(1);
    expect(dryRunResult).toEqual(43n);
  });

  it('Creates a factory from inputs that can return transaction results', async () => {
    const factory = await createContractFactory();

    const contact = await factory.deployContract();

    expect(contact.interface).toBeInstanceOf(Interface);

    await contact.submit.initialize_counter(100);

    const submitResult = await contact.submitResult.increment_counter(1);
    expect(submitResult).toEqual(
      expect.objectContaining({
        blockId: expect.stringContaining('0x'),
        receipts: expect.arrayContaining([
          expect.objectContaining({ amount: 0n, type: 0 }),
          expect.objectContaining({ type: 1, val: 101n }),
          expect.objectContaining({ type: 1, val: 0n }),
          expect.objectContaining({ type: 9 }),
        ]),
        status: {
          programState: {
            data: '0x0000000000000000',
            returnType: 'RETURN',
          },
          type: 'success',
        },
      })
    );

    const dryRunResult = await contact.dryRunResult.increment_counter(1);
    expect(dryRunResult.blockId).toBeFalsy();
    expect(dryRunResult).toEqual(
      expect.objectContaining({
        receipts: expect.arrayContaining([
          expect.objectContaining({ amount: 0n, type: 0 }),
          expect.objectContaining({ type: 1, val: 102n }),
          expect.objectContaining({ type: 1, val: 0n }),
          expect.objectContaining({ type: 9 }),
        ]),
      })
    );
  });

  it('Creates a factory from inputs that can prepare call data', async () => {
    const factory = await createContractFactory();

    const contact = await factory.deployContract();

    const prepared = await contact.prepareCall.increment_counter(1);
    expect(prepared).toEqual(
      expect.objectContaining({
        bytePrice: 0n,
        gasLimit: 1000000n,
        inputs: expect.arrayContaining([
          expect.objectContaining({ type: 1 }),
          expect.objectContaining({ status: 'UNSPENT', type: 0, witnessIndex: 0 }),
        ]),
        outputs: expect.arrayContaining([
          expect.objectContaining({ inputIndex: 0, type: 1 }),
          expect.objectContaining({ type: 3 }),
        ]),
        gasPrice: 0n,
        maturity: 0n,
        type: 0,
        witnesses: ['0x'],
      })
    );
  });

  it('Creates a contract with initial storage', async () => {
    const factory = await createContractFactory();
    const u64 = '0x1000000000000001';
    const b256 = '0x626f0c36909faecc316056fca8be684ab0cd06afc63247dc008bdf9e433f927a';

    const contact = await factory.deployContract({
      storageSlots: [
        // Initialize counter with 1
        ['0x0000000000000000000000000000000000000000000000000000000000000000', u64],
        // Initialize b256 value
        ['0x0000000000000000000000000000000000000000000000000000000000000001', b256],
      ],
    });

    const result64 = await contact.submit.counter();
    expect(result64).toEqual(BigInt(u64));

    const result256 = await contact.submit.return_b256();
    expect(result256).toEqual(b256);
  });
});
