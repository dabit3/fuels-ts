import { contractPaths } from '../../test/fixtures/index';
import { compileSwayToJson } from '../../test/utils/sway/compileSwayToJson';
import type { IRawAbiTypeRoot, IRawAbiTypeComponent } from '../interfaces/IRawAbiType';
import { TargetEnum } from '../interfaces/TargetEnum';

import { makeType } from './makeType';
import { parseTypeArguments } from './parseTypeArguments';

/*
  Sample ABI with components in both fashions:
    — WITH and WITHOUT `typeArguments`
*/
const defautRawTypes: IRawAbiTypeRoot[] = [
  {
    typeId: 0,
    type: 'bool',
    components: null,
    typeParameters: null,
  },
  {
    typeId: 1,
    type: 'generic T',
    components: null,
    typeParameters: null,
  },
  {
    typeId: 2,
    type: 'struct A',
    components: [
      {
        name: 'a',
        type: 1,
        typeArguments: null,
      },
    ],
    typeParameters: [1],
  },
  {
    typeId: 3,
    type: 'struct B',
    components: [
      {
        name: 'b',
        type: 2,
        typeArguments: [
          {
            name: '',
            type: 4,
            typeArguments: null,
          },
        ],
      },
    ],
    typeParameters: null,
  },
  {
    typeId: 4,
    type: 'u8',
    components: null,
    typeParameters: null,
  },
];

describe('parseTypeArguments.ts', () => {
  /*
    Test helpers
  */
  function bundleTypes(rawTypes = defautRawTypes) {
    const types = rawTypes.map((rawAbiType) => makeType({ rawAbiType }));
    return types;
  }

  function getTypeComponents(params: { typeId: number }) {
    const found = defautRawTypes.find((rt) => rt.typeId === params.typeId);
    return (found as IRawAbiTypeRoot).components as IRawAbiTypeComponent[];
  }

  /*
    Tests
  */
  test('should parse type arguments just fine', async () => {
    const types = bundleTypes();
    const typeArguments = getTypeComponents({ typeId: 2 });

    const asInput = parseTypeArguments({ types, target: TargetEnum.INPUT, typeArguments });
    const asOutput = parseTypeArguments({ types, target: TargetEnum.OUTPUT, typeArguments });

    expect(asInput).toEqual('T');
    expect(asOutput).toEqual('T');
  });

  test('should parse type arguments recursively', async () => {
    const types = bundleTypes();
    const typeArguments = getTypeComponents({ typeId: 3 }); // this has `typeArguments`

    const asInput = parseTypeArguments({ types, target: TargetEnum.INPUT, typeArguments });
    const asOutput = parseTypeArguments({ types, target: TargetEnum.OUTPUT, typeArguments });

    expect(asInput).toEqual('AInput<BigNumberish>');
    expect(asOutput).toEqual('AOutput<number>');
  });

  test('should fallback to void for null outputs', async () => {
    const contractPath = contractPaths.fnVoid;
    const jsonAbi = await compileSwayToJson({ contractPath });

    const types = bundleTypes([]);
    const typeArguments = [jsonAbi.rawContents.functions[0].output];

    // should fallback to void because `typeArguments.type` will be 0, and non-existent
    const asOutput = parseTypeArguments({ types, target: TargetEnum.OUTPUT, typeArguments });

    expect(asOutput).toEqual('void');
  });
});
