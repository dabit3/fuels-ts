---
layout: default
title: internal
parent: "@fuel-ts/providers"
nav_order: 3

---

# Namespace: internal

[@fuel-ts/providers](../index.md).internal

## Enumerations

- [GqlReturnType](../enums/internal-GqlReturnType.md)

## Classes

- [AbstractAccount](../classes/internal-AbstractAccount.md)
- [AbstractAddress](../classes/internal-AbstractAddress.md)
- [AbstractContract](../classes/internal-AbstractContract.md)
- [AbstractProgram](../classes/internal-AbstractProgram.md)
- [AbstractScriptRequest](../classes/internal-AbstractScriptRequest.md)
- [BN](../classes/internal-BN.md)
- [BaseTransactionRequest](../classes/internal-BaseTransactionRequest.md)

## Interfaces

- [BNHelper](../interfaces/internal-BNHelper.md)
- [BNHiddenTypes](../interfaces/internal-BNHiddenTypes.md)
- [BNInputOverrides](../interfaces/internal-BNInputOverrides.md)
- [BNOverrides](../interfaces/internal-BNOverrides.md)
- [BaseTransactionRequestLike](../interfaces/internal-BaseTransactionRequestLike.md)

## Enumeration Members

### Call

• **Call**: ``0``

#### Defined in

[packages/transactions/src/coders/receipt.ts:10](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L10)

___

### Change

• **Change**: ``3``

#### Defined in

[packages/transactions/src/coders/output.ts:10](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L10)

___

### Coin

• **Coin**: ``0``

#### Defined in

[packages/transactions/src/coders/input.ts:15](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/input.ts#L15)

___

### Coin

• **Coin**: ``0``

#### Defined in

[packages/transactions/src/coders/output.ts:7](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L7)

___

### Contract

• **Contract**: ``1``

#### Defined in

[packages/transactions/src/coders/input.ts:16](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/input.ts#L16)

___

### Contract

• **Contract**: ``1``

#### Defined in

[packages/transactions/src/coders/output.ts:8](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L8)

___

### ContractCreated

• **ContractCreated**: ``5``

#### Defined in

[packages/transactions/src/coders/output.ts:12](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L12)

___

### Log

• **Log**: ``5``

#### Defined in

[packages/transactions/src/coders/receipt.ts:15](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L15)

___

### LogData

• **LogData**: ``6``

#### Defined in

[packages/transactions/src/coders/receipt.ts:16](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L16)

___

### Message

• **Message**: ``2``

#### Defined in

[packages/transactions/src/coders/input.ts:17](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/input.ts#L17)

___

### Message

• **Message**: ``2``

#### Defined in

[packages/transactions/src/coders/output.ts:9](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L9)

___

### MessageOut

• **MessageOut**: ``10``

#### Defined in

[packages/transactions/src/coders/receipt.ts:20](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L20)

___

### Panic

• **Panic**: ``3``

#### Defined in

[packages/transactions/src/coders/receipt.ts:13](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L13)

___

### Return

• **Return**: ``1``

#### Defined in

[packages/transactions/src/coders/receipt.ts:11](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L11)

___

### ReturnData

• **ReturnData**: ``2``

#### Defined in

[packages/transactions/src/coders/receipt.ts:12](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L12)

___

### Revert

• **Revert**: ``4``

#### Defined in

[packages/transactions/src/coders/receipt.ts:14](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L14)

___

### ScriptResult

• **ScriptResult**: ``9``

#### Defined in

[packages/transactions/src/coders/receipt.ts:19](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L19)

___

### Transfer

• **Transfer**: ``7``

#### Defined in

[packages/transactions/src/coders/receipt.ts:17](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L17)

___

### TransferOut

• **TransferOut**: ``8``

#### Defined in

[packages/transactions/src/coders/receipt.ts:18](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L18)

___

### Variable

• **Variable**: ``4``

#### Defined in

[packages/transactions/src/coders/output.ts:11](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L11)

## Type Aliases

### AddressLike

Ƭ **AddressLike**: [`AbstractAddress`](../classes/internal-AbstractAddress.md) \| [`AbstractAccount`](../classes/internal-AbstractAccount.md)

#### Defined in

[packages/interfaces/src/index.ts:55](https://github.com/FuelLabs/fuels-ts/blob/master/packages/interfaces/src/index.ts#L55)

___

### BNInput

Ƭ **BNInput**: `number` \| `string` \| `number`[] \| `Uint8Array` \| `Buffer` \| `BnJs`

#### Defined in

[packages/math/src/bn.ts:8](https://github.com/FuelLabs/fuels-ts/blob/master/packages/math/src/bn.ts#L8)

___

### BigNumberish

Ƭ **BigNumberish**: `string` \| `number` \| [`BN`](../classes/internal-BN.md)

#### Defined in

[packages/math/src/types.ts:3](https://github.com/FuelLabs/fuels-ts/blob/master/packages/math/src/types.ts#L3)

___

### CompareResult

Ƭ **CompareResult**: ``-1`` \| ``0`` \| ``1``

#### Defined in

[packages/math/src/bn.ts:7](https://github.com/FuelLabs/fuels-ts/blob/master/packages/math/src/bn.ts#L7)

___

### ContractIdLike

Ƭ **ContractIdLike**: [`AbstractAddress`](../classes/internal-AbstractAddress.md) \| [`AbstractContract`](../classes/internal-AbstractContract.md)

#### Defined in

[packages/interfaces/src/index.ts:57](https://github.com/FuelLabs/fuels-ts/blob/master/packages/interfaces/src/index.ts#L57)

___

### Exact

Ƭ **Exact**<`T`\>: { [K in keyof T]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

packages/providers/src/__generated__/operations.ts:7

___

### FormatConfig

Ƭ **FormatConfig**: { `units?`: `number`  } & [`ToFixedConfig`](internal.md#tofixedconfig)

#### Defined in

[packages/math/src/types.ts:8](https://github.com/FuelLabs/fuels-ts/blob/master/packages/math/src/types.ts#L8)

___

### GqlBalanceFilterInput

Ƭ **GqlBalanceFilterInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | [`Scalars`](internal.md#scalars)[``"Address"``] | Filter coins based on the `owner` field |

#### Defined in

packages/providers/src/__generated__/operations.ts:59

___

### GqlCoinFilterInput

Ƭ **GqlCoinFilterInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId?` | [`InputMaybe`](internal.md#inputmaybe)<[`Scalars`](internal.md#scalars)[``"AssetId"``]\> | Returns coins only with `asset_id`. |
| `owner` | [`Scalars`](internal.md#scalars)[``"Address"``] | Returns coins owned by the `owner`. |

#### Defined in

packages/providers/src/__generated__/operations.ts:142

___

### GqlDryRunMutation

Ƭ **GqlDryRunMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Mutation"`` |
| `dryRun` | { `__typename`: ``"Receipt"`` ; `data?`: `string` \| ``null`` ; `rawPayload`: `string`  }[] |

#### Defined in

packages/providers/src/__generated__/operations.ts:1463

___

### GqlEndSessionMutation

Ƭ **GqlEndSessionMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Mutation"`` |
| `endSession` | `boolean` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1485

___

### GqlExcludeInput

Ƭ **GqlExcludeInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `messages` | [`Scalars`](internal.md#scalars)[``"MessageId"``][] | Messages to exclude from the selection. |
| `utxos` | [`Scalars`](internal.md#scalars)[``"UtxoId"``][] | Utxos to exclude from the selection. |

#### Defined in

packages/providers/src/__generated__/operations.ts:231

___

### GqlExecuteMutation

Ƭ **GqlExecuteMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Mutation"`` |
| `execute` | `boolean` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1492

___

### GqlGetBalanceQuery

Ƭ **GqlGetBalanceQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `balance` | { `__typename`: ``"Balance"`` ; `amount`: `string` ; `assetId`: `string` ; `owner`: `string`  } |
| `balance.__typename` | ``"Balance"`` |
| `balance.amount` | `string` |
| `balance.assetId` | `string` |
| `balance.owner` | `string` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1373

___

### GqlGetBalancesQuery

Ƭ **GqlGetBalancesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `balances` | { `__typename`: ``"BalanceConnection"`` ; `edges`: { `__typename`: ``"BalanceEdge"`` ; `node`: { `__typename`: ``"Balance"`` ; `amount`: `string` ; `assetId`: `string` ; `owner`: `string`  }  }[]  } |
| `balances.__typename` | ``"BalanceConnection"`` |
| `balances.edges` | { `__typename`: ``"BalanceEdge"`` ; `node`: { `__typename`: ``"Balance"`` ; `amount`: `string` ; `assetId`: `string` ; `owner`: `string`  }  }[] |

#### Defined in

packages/providers/src/__generated__/operations.ts:1386

___

### GqlGetBlockQuery

Ƭ **GqlGetBlockQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `block?` | { `__typename`: ``"Block"`` ; `header`: { `__typename`: ``"Header"`` ; `height`: `string` ; `time`: `any`  } ; `id`: `string` ; `transactions`: { `__typename`: ``"Transaction"`` ; `id`: `string`  }[]  } \| ``null`` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1189

___

### GqlGetBlockWithTransactionsQuery

Ƭ **GqlGetBlockWithTransactionsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `block?` | { `__typename`: ``"Block"`` ; `header`: { `__typename`: ``"Header"`` ; `height`: `string` ; `time`: `any`  } ; `id`: `string` ; `transactions`: { `__typename`: ``"Transaction"`` ; `gasPrice?`: `string` \| ``null`` ; `id`: `string` ; `rawPayload`: `string` ; `status?`: { `__typename`: ``"FailureStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `reason`: `string` ; `time`: `any` ; `type`: ``"FailureStatus"``  } \| { `__typename`: ``"SqueezedOutStatus"`` ; `type`: ``"SqueezedOutStatus"``  } \| { `__typename`: ``"SubmittedStatus"`` ; `time`: `any` ; `type`: ``"SubmittedStatus"``  } \| { `__typename`: ``"SuccessStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `programState?`: { `__typename`: ``"ProgramState"`` ; `data`: `string` ; `returnType`: [`GqlReturnType`](../enums/internal-GqlReturnType.md)  } \| ``null`` ; `time`: `any` ; `type`: ``"SuccessStatus"``  } \| ``null``  }[]  } \| ``null`` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1204

___

### GqlGetBlocksQuery

Ƭ **GqlGetBlocksQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `blocks` | { `__typename`: ``"BlockConnection"`` ; `edges`: { `__typename`: ``"BlockEdge"`` ; `node`: { `__typename`: ``"Block"`` ; `header`: { `__typename`: ``"Header"`` ; `height`: `string` ; `time`: `any`  } ; `id`: `string` ; `transactions`: { `__typename`: ``"Transaction"`` ; `id`: `string`  }[]  }  }[]  } |
| `blocks.__typename` | ``"BlockConnection"`` |
| `blocks.edges` | { `__typename`: ``"BlockEdge"`` ; `node`: { `__typename`: ``"Block"`` ; `header`: { `__typename`: ``"Header"`` ; `height`: `string` ; `time`: `any`  } ; `id`: `string` ; `transactions`: { `__typename`: ``"Transaction"`` ; `id`: `string`  }[]  }  }[] |

#### Defined in

packages/providers/src/__generated__/operations.ts:1248

___

### GqlGetChainQuery

Ƭ **GqlGetChainQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `chain` | { `__typename`: ``"ChainInfo"`` ; `baseChainHeight`: `string` ; `consensusParameters`: { `__typename`: ``"ConsensusParameters"`` ; `contractMaxSize`: `string` ; `gasPerByte`: `string` ; `gasPriceFactor`: `string` ; `maxGasPerTx`: `string` ; `maxInputs`: `string` ; `maxMessageDataLength`: `string` ; `maxOutputs`: `string` ; `maxPredicateDataLength`: `string` ; `maxPredicateLength`: `string` ; `maxScriptDataLength`: `string` ; `maxScriptLength`: `string` ; `maxStorageSlots`: `string` ; `maxWitnesses`: `string`  } ; `latestBlock`: { `__typename`: ``"Block"`` ; `header`: { `__typename`: ``"Header"`` ; `height`: `string` ; `time`: `any`  } ; `id`: `string` ; `transactions`: { `__typename`: ``"Transaction"`` ; `id`: `string`  }[]  } ; `name`: `string` ; `peerCount`: `number`  } |
| `chain.__typename` | ``"ChainInfo"`` |
| `chain.baseChainHeight` | `string` |
| `chain.consensusParameters` | { `__typename`: ``"ConsensusParameters"`` ; `contractMaxSize`: `string` ; `gasPerByte`: `string` ; `gasPriceFactor`: `string` ; `maxGasPerTx`: `string` ; `maxInputs`: `string` ; `maxMessageDataLength`: `string` ; `maxOutputs`: `string` ; `maxPredicateDataLength`: `string` ; `maxPredicateLength`: `string` ; `maxScriptDataLength`: `string` ; `maxScriptLength`: `string` ; `maxStorageSlots`: `string` ; `maxWitnesses`: `string`  } |
| `chain.consensusParameters.__typename` | ``"ConsensusParameters"`` |
| `chain.consensusParameters.contractMaxSize` | `string` |
| `chain.consensusParameters.gasPerByte` | `string` |
| `chain.consensusParameters.gasPriceFactor` | `string` |
| `chain.consensusParameters.maxGasPerTx` | `string` |
| `chain.consensusParameters.maxInputs` | `string` |
| `chain.consensusParameters.maxMessageDataLength` | `string` |
| `chain.consensusParameters.maxOutputs` | `string` |
| `chain.consensusParameters.maxPredicateDataLength` | `string` |
| `chain.consensusParameters.maxPredicateLength` | `string` |
| `chain.consensusParameters.maxScriptDataLength` | `string` |
| `chain.consensusParameters.maxScriptLength` | `string` |
| `chain.consensusParameters.maxStorageSlots` | `string` |
| `chain.consensusParameters.maxWitnesses` | `string` |
| `chain.latestBlock` | { `__typename`: ``"Block"`` ; `header`: { `__typename`: ``"Header"`` ; `height`: `string` ; `time`: `any`  } ; `id`: `string` ; `transactions`: { `__typename`: ``"Transaction"`` ; `id`: `string`  }[]  } |
| `chain.latestBlock.__typename` | ``"Block"`` |
| `chain.latestBlock.header` | { `__typename`: ``"Header"`` ; `height`: `string` ; `time`: `any`  } |
| `chain.latestBlock.header.__typename` | ``"Header"`` |
| `chain.latestBlock.header.height` | `string` |
| `chain.latestBlock.header.time` | `any` |
| `chain.latestBlock.id` | `string` |
| `chain.latestBlock.transactions` | { `__typename`: ``"Transaction"`` ; `id`: `string`  }[] |
| `chain.name` | `string` |
| `chain.peerCount` | `number` |

#### Defined in

packages/providers/src/__generated__/operations.ts:988

___

### GqlGetCoinQuery

Ƭ **GqlGetCoinQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `coin?` | { `__typename`: ``"Coin"`` ; `amount`: `string` ; `assetId`: `string` ; `blockCreated`: `string` ; `coinStatus`: [`CoinStatus`](../enums/CoinStatus.md) ; `maturity`: `string` ; `owner`: `string` ; `utxoId`: `string`  } \| ``null`` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1268

___

### GqlGetCoinsQuery

Ƭ **GqlGetCoinsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `coins` | { `__typename`: ``"CoinConnection"`` ; `edges`: { `__typename`: ``"CoinEdge"`` ; `node`: { `__typename`: ``"Coin"`` ; `amount`: `string` ; `assetId`: `string` ; `blockCreated`: `string` ; `coinStatus`: [`CoinStatus`](../enums/CoinStatus.md) ; `maturity`: `string` ; `owner`: `string` ; `utxoId`: `string`  }  }[]  } |
| `coins.__typename` | ``"CoinConnection"`` |
| `coins.edges` | { `__typename`: ``"CoinEdge"`` ; `node`: { `__typename`: ``"Coin"`` ; `amount`: `string` ; `assetId`: `string` ; `blockCreated`: `string` ; `coinStatus`: [`CoinStatus`](../enums/CoinStatus.md) ; `maturity`: `string` ; `owner`: `string` ; `utxoId`: `string`  }  }[] |

#### Defined in

packages/providers/src/__generated__/operations.ts:1290

___

### GqlGetContractBalanceQuery

Ƭ **GqlGetContractBalanceQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `contractBalance` | { `__typename`: ``"ContractBalance"`` ; `amount`: `string` ; `assetId`: `string` ; `contract`: `string`  } |
| `contractBalance.__typename` | ``"ContractBalance"`` |
| `contractBalance.amount` | `string` |
| `contractBalance.assetId` | `string` |
| `contractBalance.contract` | `string` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1358

___

### GqlGetContractQuery

Ƭ **GqlGetContractQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `contract?` | { `__typename`: ``"Contract"`` ; `bytecode`: `string` ; `id`: `string`  } \| ``null`` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1348

___

### GqlGetInfoQuery

Ƭ **GqlGetInfoQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `nodeInfo` | { `__typename`: ``"NodeInfo"`` ; `minGasPrice`: `string` ; `nodeVersion`: `string`  } |
| `nodeInfo.__typename` | ``"NodeInfo"`` |
| `nodeInfo.minGasPrice` | `string` |
| `nodeInfo.nodeVersion` | `string` |

#### Defined in

packages/providers/src/__generated__/operations.ts:981

___

### GqlGetMessageProofQuery

Ƭ **GqlGetMessageProofQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `messageProof?` | { `__typename`: ``"MessageProof"`` ; `amount`: `string` ; `data`: `string` ; `header`: { `__typename`: ``"Header"`` ; `applicationHash`: `string` ; `daHeight`: `string` ; `height`: `string` ; `id`: `string` ; `outputMessagesCount`: `string` ; `outputMessagesRoot`: `string` ; `prevRoot`: `string` ; `time`: `any` ; `transactionsCount`: `string` ; `transactionsRoot`: `string`  } ; `nonce`: `string` ; `proofIndex`: `string` ; `proofSet`: `string`[] ; `recipient`: `string` ; `sender`: `string` ; `signature`: `any`  } \| ``null`` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1430

___

### GqlGetMessagesQuery

Ƭ **GqlGetMessagesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `messages` | { `__typename`: ``"MessageConnection"`` ; `edges`: { `__typename`: ``"MessageEdge"`` ; `node`: { `__typename`: ``"Message"`` ; `amount`: `string` ; `daHeight`: `string` ; `data`: `string` ; `messageStatus`: [`MessageStatus`](../enums/MessageStatus.md) ; `nonce`: `string` ; `recipient`: `string` ; `sender`: `string`  }  }[]  } |
| `messages.__typename` | ``"MessageConnection"`` |
| `messages.edges` | { `__typename`: ``"MessageEdge"`` ; `node`: { `__typename`: ``"Message"`` ; `amount`: `string` ; `daHeight`: `string` ; `data`: `string` ; `messageStatus`: [`MessageStatus`](../enums/MessageStatus.md) ; `nonce`: `string` ; `recipient`: `string` ; `sender`: `string`  }  }[] |

#### Defined in

packages/providers/src/__generated__/operations.ts:1405

___

### GqlGetResourcesToSpendQuery

Ƭ **GqlGetResourcesToSpendQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `resourcesToSpend` | ({ `__typename`: ``"Coin"`` ; `amount`: `string` ; `assetId`: `string` ; `blockCreated`: `string` ; `coinStatus`: [`CoinStatus`](../enums/CoinStatus.md) ; `maturity`: `string` ; `owner`: `string` ; `utxoId`: `string`  } \| { `__typename`: ``"Message"`` ; `amount`: `string` ; `daHeight`: `string` ; `data`: `string` ; `messageStatus`: [`MessageStatus`](../enums/MessageStatus.md) ; `nonce`: `string` ; `recipient`: `string` ; `sender`: `string`  })[][] |

#### Defined in

packages/providers/src/__generated__/operations.ts:1316

___

### GqlGetTransactionQuery

Ƭ **GqlGetTransactionQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `transaction?` | { `__typename`: ``"Transaction"`` ; `gasPrice?`: `string` \| ``null`` ; `id`: `string` ; `rawPayload`: `string` ; `status?`: { `__typename`: ``"FailureStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `reason`: `string` ; `time`: `any` ; `type`: ``"FailureStatus"``  } \| { `__typename`: ``"SqueezedOutStatus"`` ; `type`: ``"SqueezedOutStatus"``  } \| { `__typename`: ``"SubmittedStatus"`` ; `time`: `any` ; `type`: ``"SubmittedStatus"``  } \| { `__typename`: ``"SuccessStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `programState?`: { `__typename`: ``"ProgramState"`` ; `data`: `string` ; `returnType`: [`GqlReturnType`](../enums/internal-GqlReturnType.md)  } \| ``null`` ; `time`: `any` ; `type`: ``"SuccessStatus"``  } \| ``null``  } \| ``null`` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1024

___

### GqlGetTransactionWithReceiptsQuery

Ƭ **GqlGetTransactionWithReceiptsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `transaction?` | { `__typename`: ``"Transaction"`` ; `gasPrice?`: `string` \| ``null`` ; `id`: `string` ; `rawPayload`: `string` ; `receipts?`: { `__typename`: ``"Receipt"`` ; `data?`: `string` \| ``null`` ; `rawPayload`: `string`  }[] \| ``null`` ; `status?`: { `__typename`: ``"FailureStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `reason`: `string` ; `time`: `any` ; `type`: ``"FailureStatus"``  } \| { `__typename`: ``"SqueezedOutStatus"`` ; `type`: ``"SqueezedOutStatus"``  } \| { `__typename`: ``"SubmittedStatus"`` ; `time`: `any` ; `type`: ``"SubmittedStatus"``  } \| { `__typename`: ``"SuccessStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `programState?`: { `__typename`: ``"ProgramState"`` ; `data`: `string` ; `returnType`: [`GqlReturnType`](../enums/internal-GqlReturnType.md)  } \| ``null`` ; `time`: `any` ; `type`: ``"SuccessStatus"``  } \| ``null``  } \| ``null`` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1060

___

### GqlGetTransactionsByOwnerQuery

Ƭ **GqlGetTransactionsByOwnerQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `transactionsByOwner` | { `__typename`: ``"TransactionConnection"`` ; `edges`: { `__typename`: ``"TransactionEdge"`` ; `node`: { `__typename`: ``"Transaction"`` ; `gasPrice?`: `string` \| ``null`` ; `id`: `string` ; `rawPayload`: `string` ; `status?`: { `__typename`: ``"FailureStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `reason`: `string` ; `time`: `any` ; `type`: ``"FailureStatus"``  } \| { `__typename`: ``"SqueezedOutStatus"`` ; `type`: ``"SqueezedOutStatus"``  } \| { `__typename`: ``"SubmittedStatus"`` ; `time`: `any` ; `type`: ``"SubmittedStatus"``  } \| { `__typename`: ``"SuccessStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `programState?`: { `__typename`: ``"ProgramState"`` ; `data`: `string` ; `returnType`: [`GqlReturnType`](../enums/internal-GqlReturnType.md)  } \| ``null`` ; `time`: `any` ; `type`: ``"SuccessStatus"``  } \| ``null``  }  }[]  } |
| `transactionsByOwner.__typename` | ``"TransactionConnection"`` |
| `transactionsByOwner.edges` | { `__typename`: ``"TransactionEdge"`` ; `node`: { `__typename`: ``"Transaction"`` ; `gasPrice?`: `string` \| ``null`` ; `id`: `string` ; `rawPayload`: `string` ; `status?`: { `__typename`: ``"FailureStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `reason`: `string` ; `time`: `any` ; `type`: ``"FailureStatus"``  } \| { `__typename`: ``"SqueezedOutStatus"`` ; `type`: ``"SqueezedOutStatus"``  } \| { `__typename`: ``"SubmittedStatus"`` ; `time`: `any` ; `type`: ``"SubmittedStatus"``  } \| { `__typename`: ``"SuccessStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `programState?`: { `__typename`: ``"ProgramState"`` ; `data`: `string` ; `returnType`: [`GqlReturnType`](../enums/internal-GqlReturnType.md)  } \| ``null`` ; `time`: `any` ; `type`: ``"SuccessStatus"``  } \| ``null``  }  }[] |

#### Defined in

packages/providers/src/__generated__/operations.ts:1146

___

### GqlGetTransactionsQuery

Ƭ **GqlGetTransactionsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `transactions` | { `__typename`: ``"TransactionConnection"`` ; `edges`: { `__typename`: ``"TransactionEdge"`` ; `node`: { `__typename`: ``"Transaction"`` ; `gasPrice?`: `string` \| ``null`` ; `id`: `string` ; `rawPayload`: `string` ; `status?`: { `__typename`: ``"FailureStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `reason`: `string` ; `time`: `any` ; `type`: ``"FailureStatus"``  } \| { `__typename`: ``"SqueezedOutStatus"`` ; `type`: ``"SqueezedOutStatus"``  } \| { `__typename`: ``"SubmittedStatus"`` ; `time`: `any` ; `type`: ``"SubmittedStatus"``  } \| { `__typename`: ``"SuccessStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `programState?`: { `__typename`: ``"ProgramState"`` ; `data`: `string` ; `returnType`: [`GqlReturnType`](../enums/internal-GqlReturnType.md)  } \| ``null`` ; `time`: `any` ; `type`: ``"SuccessStatus"``  } \| ``null``  }  }[]  } |
| `transactions.__typename` | ``"TransactionConnection"`` |
| `transactions.edges` | { `__typename`: ``"TransactionEdge"`` ; `node`: { `__typename`: ``"Transaction"`` ; `gasPrice?`: `string` \| ``null`` ; `id`: `string` ; `rawPayload`: `string` ; `status?`: { `__typename`: ``"FailureStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `reason`: `string` ; `time`: `any` ; `type`: ``"FailureStatus"``  } \| { `__typename`: ``"SqueezedOutStatus"`` ; `type`: ``"SqueezedOutStatus"``  } \| { `__typename`: ``"SubmittedStatus"`` ; `time`: `any` ; `type`: ``"SubmittedStatus"``  } \| { `__typename`: ``"SuccessStatus"`` ; `block`: { `__typename`: ``"Block"`` ; `id`: `string`  } ; `programState?`: { `__typename`: ``"ProgramState"`` ; `data`: `string` ; `returnType`: [`GqlReturnType`](../enums/internal-GqlReturnType.md)  } \| ``null`` ; `time`: `any` ; `type`: ``"SuccessStatus"``  } \| ``null``  }  }[] |

#### Defined in

packages/providers/src/__generated__/operations.ts:1100

___

### GqlGetVersionQuery

Ƭ **GqlGetVersionQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Query"`` |
| `nodeInfo` | { `__typename`: ``"NodeInfo"`` ; `nodeVersion`: `string`  } |
| `nodeInfo.__typename` | ``"NodeInfo"`` |
| `nodeInfo.nodeVersion` | `string` |

#### Defined in

packages/providers/src/__generated__/operations.ts:974

___

### GqlResetMutation

Ƭ **GqlResetMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Mutation"`` |
| `reset` | `boolean` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1498

___

### GqlSpendQueryElementInput

Ƭ **GqlSpendQueryElementInput**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`Scalars`](internal.md#scalars)[``"U64"``] | Target amount for the query. |
| `assetId` | [`Scalars`](internal.md#scalars)[``"AssetId"``] | Identifier of the asset to spend. |
| `max?` | [`InputMaybe`](internal.md#inputmaybe)<[`Scalars`](internal.md#scalars)[``"U64"``]\> | The maximum number of currencies for selection. |

#### Defined in

packages/providers/src/__generated__/operations.ts:707

___

### GqlStartSessionMutation

Ƭ **GqlStartSessionMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Mutation"`` |
| `startSession` | `string` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1479

___

### GqlSubmitMutation

Ƭ **GqlSubmitMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename` | ``"Mutation"`` |
| `submit` | { `__typename`: ``"Transaction"`` ; `id`: `string`  } |
| `submit.__typename` | ``"Transaction"`` |
| `submit.id` | `string` |

#### Defined in

packages/providers/src/__generated__/operations.ts:1472

___

### Input

Ƭ **Input**: [`InputCoin`](internal.md#inputcoin) \| [`InputContract`](internal.md#inputcontract) \| [`InputMessage`](internal.md#inputmessage)

#### Defined in

[packages/transactions/src/coders/input.ts:324](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/input.ts#L324)

___

### InputCoin

Ƭ **InputCoin**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BN`](../classes/internal-BN.md) | Amount of coins (u64) |
| `assetId` | `string` | Asset ID of the coins (b256) |
| `maturity` | `number` | UTXO being spent must have been created at least this many blocks ago (u32) |
| `owner` | `string` | Owning address or script hash (b256) |
| `predicate` | `string` | Predicate bytecode (byte[]) |
| `predicateData` | `string` | Predicate input data (parameters) (byte[]) |
| `predicateDataLength` | `number` | Length of predicate input data, in bytes (u16) |
| `predicateLength` | `number` | Length of predicate, in instructions (u16) |
| `txPointer` | [`TxPointer`](internal.md#txpointer) | Points to the TX whose output is being spent. (TxPointer) |
| `type` | [`Coin`](internal.md#coin) | - |
| `utxoID` | [`UtxoId`](internal.md#utxoid) | UTXO ID (UtxoId) |
| `witnessIndex` | `number` | Index of witness that authorizes spending the coin (u8) |

#### Defined in

[packages/transactions/src/coders/input.ts:20](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/input.ts#L20)

___

### InputContract

Ƭ **InputContract**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `balanceRoot` | `string` | Root of amount of coins owned by contract before transaction execution (b256) |
| `contractID` | `string` | Contract ID (b256) |
| `stateRoot` | `string` | State root of contract before transaction execution (b256) |
| `txPointer` | [`TxPointer`](internal.md#txpointer) | Points to the TX whose output is being spent. (TxPointer) |
| `type` | [`Contract`](internal.md#contract) | - |
| `utxoID` | [`UtxoId`](internal.md#utxoid) | UTXO ID (UtxoId) |

#### Defined in

[packages/transactions/src/coders/input.ts:131](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/input.ts#L131)

___

### InputMaybe

Ƭ **InputMaybe**<`T`\>: [`Maybe`](internal.md#maybe)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/providers/src/__generated__/operations.ts:6

___

### InputMessage

Ƭ **InputMessage**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BN`](../classes/internal-BN.md) | Amount of coins |
| `data` | `string` | data of message |
| `dataLength` | `number` | Length of predicate, in instructions (u16) |
| `nonce` | [`BN`](../classes/internal-BN.md) | Unique nonce of message |
| `predicate` | `string` | Predicate bytecode (byte[]) |
| `predicateData` | `string` | Predicate input data (parameters) (byte[]) |
| `predicateDataLength` | `number` | Length of predicate input data, in bytes (u16) |
| `predicateLength` | `number` | Length of predicate, in instructions (u16) |
| `recipient` | `string` | Address of sender |
| `sender` | `string` | Address of sender |
| `type` | [`Message`](internal.md#message) | - |
| `witnessIndex` | `number` | Index of witness that authorizes message (u8) |

#### Defined in

[packages/transactions/src/coders/input.ts:196](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/input.ts#L196)

___

### Maybe

Ƭ **Maybe**<`T`\>: `T` \| ``null``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/providers/src/__generated__/operations.ts:5

___

### Output

Ƭ **Output**: [`OutputCoin`](internal.md#outputcoin) \| [`OutputContract`](internal.md#outputcontract) \| [`OutputMessage`](internal.md#outputmessage) \| [`OutputChange`](internal.md#outputchange) \| [`OutputVariable`](internal.md#outputvariable) \| [`OutputContractCreated`](internal.md#outputcontractcreated)

#### Defined in

[packages/transactions/src/coders/output.ts:294](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L294)

___

### OutputChange

Ƭ **OutputChange**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BN`](../classes/internal-BN.md) | Amount of coins to send (u64) |
| `assetId` | `string` | Asset ID of coins (b256) |
| `to` | `string` | Receiving address or script hash (b256) |
| `type` | [`Change`](internal.md#change) | - |

#### Defined in

[packages/transactions/src/coders/output.ts:153](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L153)

___

### OutputCoin

Ƭ **OutputCoin**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BN`](../classes/internal-BN.md) | Amount of coins to send (u64) |
| `assetId` | `string` | Asset ID of coins (b256) |
| `to` | `string` | Receiving address or script hash (b256) |
| `type` | [`Coin`](internal.md#coin-1) | - |

#### Defined in

[packages/transactions/src/coders/output.ts:15](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L15)

___

### OutputContract

Ƭ **OutputContract**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `balanceRoot` | `string` | Root of amount of coins owned by contract after transaction execution (b256) |
| `inputIndex` | `number` | Index of input contract (u8) |
| `stateRoot` | `string` | State root of contract after transaction execution (b256) |
| `type` | [`Contract`](internal.md#contract-1) | - |

#### Defined in

[packages/transactions/src/coders/output.ts:63](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L63)

___

### OutputContractCreated

Ƭ **OutputContractCreated**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractId` | `string` | Contract ID (b256) |
| `stateRoot` | `string` | State root of contract (b256) |
| `type` | [`ContractCreated`](internal.md#contractcreated) | - |

#### Defined in

[packages/transactions/src/coders/output.ts:249](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L249)

___

### OutputMessage

Ƭ **OutputMessage**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BN`](../classes/internal-BN.md) | Amount of coins to send with message (u64) |
| `recipient` | `string` | Receiving address (b256) |
| `type` | [`Message`](internal.md#message-1) | - |

#### Defined in

[packages/transactions/src/coders/output.ts:111](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L111)

___

### OutputVariable

Ƭ **OutputVariable**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BN`](../classes/internal-BN.md) | Amount of coins to send (u64) |
| `assetId` | `string` | Asset ID of coins (b256) |
| `to` | `string` | Receiving address or script hash (b256) |
| `type` | [`Variable`](internal.md#variable) | - |

#### Defined in

[packages/transactions/src/coders/output.ts:201](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/output.ts#L201)

___

### PossibleTransactions

Ƭ **PossibleTransactions**: [`TransactionScript`](internal.md#transactionscript) \| [`TransactionCreate`](internal.md#transactioncreate) \| [`TransactionMint`](internal.md#transactionmint)

#### Defined in

[packages/transactions/src/coders/transaction.ts:347](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/transaction.ts#L347)

___

### ReceiptCall

Ƭ **ReceiptCall**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BN`](../classes/internal-BN.md) | Amount of coins to forward, i.e. $rB (u64) |
| `assetId` | `string` | Asset ID of coins to forward, i.e. MEM[$rC, 32] (b256) |
| `from` | `string` | Contract ID of current context if in an internal context, zero otherwise (b256) |
| `gas` | [`BN`](../classes/internal-BN.md) | Gas to forward, i.e. $rD (u64) |
| `is` | [`BN`](../classes/internal-BN.md) | Value of register $is (u64) |
| `param1` | [`BN`](../classes/internal-BN.md) | First parameter (u64) |
| `param2` | [`BN`](../classes/internal-BN.md) | Second parameter (u64) |
| `pc` | [`BN`](../classes/internal-BN.md) | Value of register $pc (u64) |
| `to` | `string` | Contract ID of called contract (b256) |
| `type` | [`Call`](internal.md#call) | - |

#### Defined in

[packages/transactions/src/coders/receipt.ts:23](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L23)

___

### ReceiptLog

Ƭ **ReceiptLog**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Contract ID of current context if in an internal context, zero otherwise (b256) |
| `is` | [`BN`](../classes/internal-BN.md) | Value of register $is (u64) |
| `pc` | [`BN`](../classes/internal-BN.md) | Value of register $pc (u64) |
| `type` | [`Log`](internal.md#log) | - |
| `val0` | [`BN`](../classes/internal-BN.md) | Value of register $rA (u64) |
| `val1` | [`BN`](../classes/internal-BN.md) | Value of register $rB (u64) |
| `val2` | [`BN`](../classes/internal-BN.md) | Value of register $rC (u64) |
| `val3` | [`BN`](../classes/internal-BN.md) | Value of register $rD (u64) |

#### Defined in

[packages/transactions/src/coders/receipt.ts:341](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L341)

___

### ReceiptLogData

Ƭ **ReceiptLogData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `digest` | `string` | Hash of MEM[$rC, $rD] (b256) |
| `id` | `string` | Contract ID of current context if in an internal context, zero otherwise (b256) |
| `is` | [`BN`](../classes/internal-BN.md) | Value of register $is (u64) |
| `len` | [`BN`](../classes/internal-BN.md) | Value of register $rD (u64) |
| `pc` | [`BN`](../classes/internal-BN.md) | Value of register $pc (u64) |
| `ptr` | [`BN`](../classes/internal-BN.md) | Value of register $rC (u64) |
| `type` | [`LogData`](internal.md#logdata) | - |
| `val0` | [`BN`](../classes/internal-BN.md) | Value of register $rA (u64) |
| `val1` | [`BN`](../classes/internal-BN.md) | Value of register $rB (u64) |

#### Defined in

[packages/transactions/src/coders/receipt.ts:413](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L413)

___

### ReceiptMessageOut

Ƭ **ReceiptMessageOut**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BN`](../classes/internal-BN.md) | Hexadecimal string representation of a 64-bit unsigned integer; value of register $rD |
| `data` | `Uint8Array` | Hexadecimal string representation of the value of the memory range MEM[$rA + 32, $rB] |
| `digest` | `string` | Hexadecimal string representation of 256-bit (32-byte), hash of MEM[$rA + 32, $rB] |
| `messageID` | `string` | Hexadecimal string representation of the 256-bit (32-byte) message ID |
| `nonce` | `string` | Hexadecimal string representation of the 256-bit (32-byte) message nonce |
| `recipient` | `string` | Hexadecimal string representation of the 256-bit (32-byte) address of the message recipient: MEM[$rA, 32] |
| `sender` | `string` | Hexadecimal string representation of the 256-bit (32-byte) address of the message sender: MEM[$fp, 32] |
| `type` | [`MessageOut`](internal.md#messageout) | - |

#### Defined in

[packages/transactions/src/coders/receipt.ts:665](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L665)

___

### ReceiptPanic

Ƭ **ReceiptPanic**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractId` | `string` | Value of optional contract ID |
| `id` | `string` | Contract ID of current context if in an internal context, zero otherwise (b256) |
| `is` | [`BN`](../classes/internal-BN.md) | Value of register $is (u64) |
| `pc` | [`BN`](../classes/internal-BN.md) | Value of register $pc (u64) |
| `reason` | [`BN`](../classes/internal-BN.md) | Panic reason (u64) |
| `type` | [`Panic`](internal.md#panic) | - |

#### Defined in

[packages/transactions/src/coders/receipt.ts:227](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L227)

___

### ReceiptReturn

Ƭ **ReceiptReturn**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Contract ID of current context if in an internal context, zero otherwise (b256) |
| `is` | [`BN`](../classes/internal-BN.md) | Value of register $is (u64) |
| `pc` | [`BN`](../classes/internal-BN.md) | Value of register $pc (u64) |
| `type` | [`Return`](internal.md#return) | - |
| `val` | [`BN`](../classes/internal-BN.md) | Value of register $rA (u64) |

#### Defined in

[packages/transactions/src/coders/receipt.ts:107](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L107)

___

### ReceiptReturnData

Ƭ **ReceiptReturnData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `digest` | `string` | Hash of MEM[$rA, $rB] (b256) |
| `id` | `string` | Contract ID of current context if in an internal context, zero otherwise (b256) |
| `is` | [`BN`](../classes/internal-BN.md) | Value of register $is (u64) |
| `len` | [`BN`](../classes/internal-BN.md) | Value of register $rB (u64) |
| `pc` | [`BN`](../classes/internal-BN.md) | Value of register $pc (u64) |
| `ptr` | [`BN`](../classes/internal-BN.md) | Value of register $rA (u64) |
| `type` | [`ReturnData`](internal.md#returndata) | - |

#### Defined in

[packages/transactions/src/coders/receipt.ts:161](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L161)

___

### ReceiptRevert

Ƭ **ReceiptRevert**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Contract ID of current context if in an internal context, zero otherwise (b256) |
| `is` | [`BN`](../classes/internal-BN.md) | Value of register $is (u64) |
| `pc` | [`BN`](../classes/internal-BN.md) | Value of register $pc (u64) |
| `type` | [`Revert`](internal.md#revert) | - |
| `val` | [`BN`](../classes/internal-BN.md) | Value of register $rA (u64) |

#### Defined in

[packages/transactions/src/coders/receipt.ts:287](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L287)

___

### ReceiptScriptResult

Ƭ **ReceiptScriptResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasUsed` | [`BN`](../classes/internal-BN.md) | Gas consumed by the script (u64) |
| `result` | [`BN`](../classes/internal-BN.md) | Result variant with embedded `PanicReason` in first 8 bits and `instr` (u64) |
| `type` | [`ScriptResult`](internal.md#scriptresult) | - |

#### Defined in

[packages/transactions/src/coders/receipt.ts:623](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L623)

___

### ReceiptTransfer

Ƭ **ReceiptTransfer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BN`](../classes/internal-BN.md) | Amount of coins transferred (u64) |
| `assetId` | `string` | Asset ID of coins transferred (b256) |
| `from` | `string` | Contract ID of current context if in an internal context, zero otherwise (b256) |
| `is` | [`BN`](../classes/internal-BN.md) | Value of register $is (u64) |
| `pc` | [`BN`](../classes/internal-BN.md) | Value of register $pc (u64) |
| `to` | `string` | Contract ID of contract to transfer coins to (b256) |
| `type` | [`Transfer`](internal.md#transfer) | - |

#### Defined in

[packages/transactions/src/coders/receipt.ts:491](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L491)

___

### ReceiptTransferOut

Ƭ **ReceiptTransferOut**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`BN`](../classes/internal-BN.md) | Amount of coins transferred (u64) |
| `assetId` | `string` | Asset ID of coins transferred (b256) |
| `from` | `string` | Contract ID of current context if in an internal context, zero otherwise (b256) |
| `is` | [`BN`](../classes/internal-BN.md) | Value of register $is (u64) |
| `pc` | [`BN`](../classes/internal-BN.md) | Value of register $pc (u64) |
| `to` | `string` | Address to transfer coins to (b256) |
| `type` | [`TransferOut`](internal.md#transferout) | - |

#### Defined in

[packages/transactions/src/coders/receipt.ts:557](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/receipt.ts#L557)

___

### Scalars

Ƭ **Scalars**: `Object`

All built-in and custom scalars, mapped to their actual values

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Address` | `string` |
| `AssetId` | `string` |
| `BlockId` | `string` |
| `Boolean` | `boolean` |
| `Bytes32` | `string` |
| `ContractId` | `string` |
| `Float` | `number` |
| `HexString` | `string` |
| `ID` | `string` |
| `Int` | `number` |
| `MessageId` | `any` |
| `Salt` | `string` |
| `Signature` | `any` |
| `String` | `string` |
| `Tai64Timestamp` | `any` |
| `TransactionId` | `string` |
| `TxPointer` | `any` |
| `U64` | `string` |
| `UtxoId` | `string` |

#### Defined in

packages/providers/src/__generated__/operations.ts:11

___

### StorageSlot

Ƭ **StorageSlot**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Key (b256) |
| `value` | `string` | Value (b256) |

#### Defined in

[packages/transactions/src/coders/storage-slot.ts:3](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/storage-slot.ts#L3)

___

### ToFixedConfig

Ƭ **ToFixedConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `minPrecision?` | `number` |
| `precision?` | `number` |

#### Defined in

[packages/math/src/types.ts:4](https://github.com/FuelLabs/fuels-ts/blob/master/packages/math/src/types.ts#L4)

___

### Transaction

Ƭ **Transaction**<`TTransactionType`\>: `TTransactionType` extends [`TransactionType`](../enums/TransactionType.md) ? `Extract`<[`PossibleTransactions`](internal.md#possibletransactions), { `type`: `TTransactionType`  }\> : `Partial`<`Omit`<[`TransactionScript`](internal.md#transactionscript), ``"type"``\>\> & `Partial`<`Omit`<[`TransactionCreate`](internal.md#transactioncreate), ``"type"``\>\> & `Partial`<`Omit`<[`TransactionMint`](internal.md#transactionmint), ``"type"``\>\> & { `type`: [`TransactionType`](../enums/TransactionType.md)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTransactionType` | `void` |

#### Defined in

[packages/transactions/src/coders/transaction.ts:348](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/transaction.ts#L348)

___

### TransactionCreate

Ƭ **TransactionCreate**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytecodeLength` | `number` | Contract bytecode length, in instructions (u16) |
| `bytecodeWitnessIndex` | `number` | Witness index of contract bytecode to create (u8) |
| `gasLimit` | [`BN`](../classes/internal-BN.md) | Gas limit for transaction (u64) |
| `gasPrice` | [`BN`](../classes/internal-BN.md) | Gas price for transaction (u64) |
| `inputs` | [`Input`](internal.md#input)[] | List of inputs (Input[]) |
| `inputsCount` | `number` | Number of inputs (u8) |
| `maturity` | `number` | Block until which tx cannot be included (u32) |
| `outputs` | [`Output`](internal.md#output)[] | List of outputs (Output[]) |
| `outputsCount` | `number` | Number of outputs (u8) |
| `salt` | `string` | Salt (b256) |
| `storageSlots` | [`StorageSlot`](internal.md#storageslot)[] | List of inputs (StorageSlot[]) |
| `storageSlotsCount` | `number` | Number of storage slots to initialize (u16) |
| `type` | [`Create`](../enums/TransactionType.md#create) | - |
| `witnesses` | [`Witness`](internal.md#witness)[] | List of witnesses (Witness[]) |
| `witnessesCount` | `number` | Number of witnesses (u8) |

#### Defined in

[packages/transactions/src/coders/transaction.ts:159](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/transaction.ts#L159)

___

### TransactionMint

Ƭ **TransactionMint**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputs` | [`Output`](internal.md#output)[] | List of outputs (Output[]) |
| `outputsCount` | `number` | Number of outputs (u8) |
| `txPointer` | [`TxPointer`](internal.md#txpointer) | The location of the Mint transaction in the block. |
| `type` | [`Mint`](../enums/TransactionType.md#mint) | - |

#### Defined in

[packages/transactions/src/coders/transaction.ts:297](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/transaction.ts#L297)

___

### TransactionRequestStorageSlot

Ƭ **TransactionRequestStorageSlot**: { `key`: `BytesLike` ; `value`: `BytesLike`  } \| [key: BytesLike, value: BytesLike]

#### Defined in

[packages/providers/src/transaction-request/storage-slot.ts:5](https://github.com/FuelLabs/fuels-ts/blob/master/packages/providers/src/transaction-request/storage-slot.ts#L5)

___

### TransactionScript

Ƭ **TransactionScript**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasLimit` | [`BN`](../classes/internal-BN.md) | Gas limit for transaction (u64) |
| `gasPrice` | [`BN`](../classes/internal-BN.md) | Gas price for transaction (u64) |
| `inputs` | [`Input`](internal.md#input)[] | List of inputs (Input[]) |
| `inputsCount` | `number` | Number of inputs (u8) |
| `maturity` | `number` | Block until which tx cannot be included (u32) |
| `outputs` | [`Output`](internal.md#output)[] | List of outputs (Output[]) |
| `outputsCount` | `number` | Number of outputs (u8) |
| `receiptsRoot` | `string` | Merkle root of receipts (b256) |
| `script` | `string` | Script to execute (byte[]) |
| `scriptData` | `string` | Script input data (parameters) (byte[]) |
| `scriptDataLength` | `number` | Length of script input data, in bytes (u16) |
| `scriptLength` | `number` | Script length, in instructions (u16) |
| `type` | [`Script`](../enums/TransactionType.md#script) | - |
| `witnesses` | [`Witness`](internal.md#witness)[] | List of witnesses (Witness[]) |
| `witnessesCount` | `number` | Number of witnesses (u8) |

#### Defined in

[packages/transactions/src/coders/transaction.ts:25](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/transaction.ts#L25)

___

### TxPointer

Ƭ **TxPointer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockHeight` | `number` | Block height (u32) |
| `txIndex` | `number` | Transaction index (u16) |

#### Defined in

[packages/transactions/src/coders/tx-pointer.ts:3](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/tx-pointer.ts#L3)

___

### UtxoId

Ƭ **UtxoId**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputIndex` | `number` | Output index (u8) |
| `transactionId` | `string` | Transaction ID (b256) |

#### Defined in

[packages/transactions/src/coders/utxo-id.ts:3](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/utxo-id.ts#L3)

___

### Witness

Ƭ **Witness**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | Witness data (byte[]) |
| `dataLength` | `number` | Length of witness data, in bytes (u32) |

#### Defined in

[packages/transactions/src/coders/witness.ts:6](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/witness.ts#L6)
