---
layout: default
title: TransactionCoder
parent: "@fuel-ts/transactions"
nav_order: 1

---

# Class: TransactionCoder

[@fuel-ts/transactions](../index.md).TransactionCoder

## Hierarchy

- `default`<[`Transaction`](../index.md#transaction), [`Transaction`](../index.md#transaction)\>

  ↳ **`TransactionCoder`**

## Constructors

### constructor

• **new TransactionCoder**()

#### Overrides

Coder&lt;Transaction, Transaction\&gt;.constructor

#### Defined in

[packages/transactions/src/coders/transaction.ts:357](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/transaction.ts#L357)

## Properties

### encodedLength

• `Readonly` **encodedLength**: `number`

#### Inherited from

Coder.encodedLength

#### Defined in

[packages/abi-coder/src/coders/abstract-coder.ts:40](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/coders/abstract-coder.ts#L40)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

Coder.name

#### Defined in

[packages/abi-coder/src/coders/abstract-coder.ts:38](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/coders/abstract-coder.ts#L38)

___

### offset

• `Optional` **offset**: `number`

#### Inherited from

Coder.offset

#### Defined in

[packages/abi-coder/src/coders/abstract-coder.ts:41](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/coders/abstract-coder.ts#L41)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

Coder.type

#### Defined in

[packages/abi-coder/src/coders/abstract-coder.ts:39](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/coders/abstract-coder.ts#L39)

## Methods

### decode

▸ **decode**(`data`, `offset`): [`Partial`<`Omit`<[`TransactionScript`](../index.md#transactionscript), ``"type"``\>\> & `Partial`<`Omit`<[`TransactionCreate`](../index.md#transactioncreate), ``"type"``\>\> & `Partial`<`Omit`<[`TransactionMint`](../index.md#transactionmint), ``"type"``\>\> & { `type`: [`TransactionType`](../enums/TransactionType.md)  }, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `offset` | `number` |

#### Returns

[`Partial`<`Omit`<[`TransactionScript`](../index.md#transactionscript), ``"type"``\>\> & `Partial`<`Omit`<[`TransactionCreate`](../index.md#transactioncreate), ``"type"``\>\> & `Partial`<`Omit`<[`TransactionMint`](../index.md#transactionmint), ``"type"``\>\> & { `type`: [`TransactionType`](../enums/TransactionType.md)  }, `number`]

#### Overrides

Coder.decode

#### Defined in

[packages/transactions/src/coders/transaction.ts:390](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/transaction.ts#L390)

___

### encode

▸ **encode**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Partial`<`Omit`<[`TransactionScript`](../index.md#transactionscript), ``"type"``\>\> & `Partial`<`Omit`<[`TransactionCreate`](../index.md#transactioncreate), ``"type"``\>\> & `Partial`<`Omit`<[`TransactionMint`](../index.md#transactionmint), ``"type"``\>\> & { `type`: [`TransactionType`](../enums/TransactionType.md)  } |

#### Returns

`Uint8Array`

#### Overrides

Coder.encode

#### Defined in

[packages/transactions/src/coders/transaction.ts:361](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/transaction.ts#L361)

___

### setOffset

▸ **setOffset**(`offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

Coder.setOffset

#### Defined in

[packages/abi-coder/src/coders/abstract-coder.ts:56](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/coders/abstract-coder.ts#L56)

___

### throwError

▸ **throwError**(`message`, `value`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `value` | `unknown` |

#### Returns

`never`

#### Inherited from

Coder.throwError

#### Defined in

[packages/abi-coder/src/coders/abstract-coder.ts:49](https://github.com/FuelLabs/fuels-ts/blob/master/packages/abi-coder/src/coders/abstract-coder.ts#L49)
