---
layout: default
title: BaseWalletUnlocked
parent: "@fuel-ts/wallet-manager"
nav_order: 1

---

# Class: BaseWalletUnlocked

[@fuel-ts/wallet-manager](../index.md).[internal](../namespaces/internal.md).BaseWalletUnlocked

BaseWalletUnlocked

## Hierarchy

- [`Account`](internal-Account.md)

  ↳ **`BaseWalletUnlocked`**

  ↳↳ [`WalletUnlocked`](internal-WalletUnlocked.md)

## Constructors

### constructor

• **new BaseWalletUnlocked**(`privateKey`, `provider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `BytesLike` |
| `provider?` | `string` \| `default` |

#### Overrides

[Account](internal-Account.md).[constructor](internal-Account.md#constructor)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:88

## Properties

### address

• `Readonly` **address**: [`AbstractAddress`](internal-AbstractAddress.md)

#### Inherited from

[Account](internal-Account.md).[address](internal-Account.md#address)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:12

___

### provider

• **provider**: `default`

#### Overrides

[Account](internal-Account.md).[provider](internal-Account.md#provider)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:86

___

### signer

• **signer**: () => [`Signer`](internal-Signer.md)

#### Type declaration

▸ (): [`Signer`](internal-Signer.md)

##### Returns

[`Signer`](internal-Signer.md)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:87

___

### defaultPath

▪ `Static` **defaultPath**: `string`

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:85

## Accessors

### privateKey

• `get` **privateKey**(): `string`

#### Returns

`string`

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:89

___

### publicKey

• `get` **publicKey**(): `string`

#### Returns

`string`

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:90

## Methods

### connect

▸ **connect**(`provider`): `default`

Change provider connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `string` \| `default` |

#### Returns

`default`

#### Inherited from

[Account](internal-Account.md).[connect](internal-Account.md#connect)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:18

___

### fund

▸ **fund**<`T`\>(`request`): `Promise`<`void`\>

Adds resources to the transaction enough to fund it.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TransactionRequest`](../namespaces/internal.md#transactionrequest) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `T` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Account](internal-Account.md).[fund](internal-Account.md#fund)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:42

___

### getBalance

▸ **getBalance**(`assetId?`): `Promise`<[`BN`](internal-BN.md)\>

Gets balance for the given asset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `assetId?` | `BytesLike` |

#### Returns

`Promise`<[`BN`](internal-BN.md)\>

#### Inherited from

[Account](internal-Account.md).[getBalance](internal-Account.md#getbalance)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:34

___

### getBalances

▸ **getBalances**(): `Promise`<[`CoinQuantity`](../namespaces/internal.md#coinquantity)[]\>

Gets balances.

#### Returns

`Promise`<[`CoinQuantity`](../namespaces/internal.md#coinquantity)[]\>

#### Inherited from

[Account](internal-Account.md).[getBalances](internal-Account.md#getbalances)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:38

___

### getCoins

▸ **getCoins**(`assetId?`): `Promise`<[`Coin`](../namespaces/internal.md#coin-2)[]\>

Gets coins owned by the wallet address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `assetId?` | `BytesLike` |

#### Returns

`Promise`<[`Coin`](../namespaces/internal.md#coin-2)[]\>

#### Inherited from

[Account](internal-Account.md).[getCoins](internal-Account.md#getcoins)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:26

___

### getMessages

▸ **getMessages**(): `Promise`<[`Message`](../namespaces/internal.md#message-2)[]\>

Gets messages owned by the wallet address.

#### Returns

`Promise`<[`Message`](../namespaces/internal.md#message-2)[]\>

#### Inherited from

[Account](internal-Account.md).[getMessages](internal-Account.md#getmessages)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:30

___

### getResourcesToSpend

▸ **getResourcesToSpend**(`quantities`, `excludedIds?`): `Promise`<[`Resource`](../namespaces/internal.md#resource)[]\>

Returns resources satisfying the spend query.

#### Parameters

| Name | Type |
| :------ | :------ |
| `quantities` | [`CoinQuantityLike`](../namespaces/internal.md#coinquantitylike)[] |
| `excludedIds?` | [`ExcludeResourcesOption`](../namespaces/internal.md#excluderesourcesoption) |

#### Returns

`Promise`<[`Resource`](../namespaces/internal.md#resource)[]\>

#### Inherited from

[Account](internal-Account.md).[getResourcesToSpend](internal-Account.md#getresourcestospend)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:22

___

### populateTransactionWitnessesSignature

▸ **populateTransactionWitnessesSignature**(`transactionRequestLike`): `Promise`<[`TransactionRequest`](../namespaces/internal.md#transactionrequest)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionRequestLike` | [`TransactionRequestLike`](../namespaces/internal.md#transactionrequestlike) |

#### Returns

`Promise`<[`TransactionRequest`](../namespaces/internal.md#transactionrequest)\>

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:105

___

### sendTransaction

▸ **sendTransaction**(`transactionRequestLike`): `Promise`<[`TransactionResponse`](internal-TransactionResponse.md)\>

Populates witnesses signature and send it to the network using `provider.sendTransaction`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionRequestLike` | [`TransactionRequestLike`](../namespaces/internal.md#transactionrequestlike) |

#### Returns

`Promise`<[`TransactionResponse`](internal-TransactionResponse.md)\>

TransactionResponse

#### Overrides

[Account](internal-Account.md).[sendTransaction](internal-Account.md#sendtransaction)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:112

___

### signMessage

▸ **signMessage**(`message`): `Promise`<`string`\>

Sign message with wallet instance privateKey

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Message |

#### Returns

`Promise`<`string`\>

Promise<string> - Signature a ECDSA 64 bytes

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:97

___

### signTransaction

▸ **signTransaction**(`transactionRequestLike`): `Promise`<`string`\>

Sign transaction with wallet instance privateKey

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionRequestLike` | [`TransactionRequestLike`](../namespaces/internal.md#transactionrequestlike) | TransactionRequestLike |

#### Returns

`Promise`<`string`\>

string - Signature a ECDSA 64 bytes

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:104

___

### simulateTransaction

▸ **simulateTransaction**(`transactionRequestLike`): `Promise`<[`CallResult`](../namespaces/internal.md#callresult)\>

Populates witnesses signature and send a call it to the network using `provider.call`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionRequestLike` | [`TransactionRequestLike`](../namespaces/internal.md#transactionrequestlike) |

#### Returns

`Promise`<[`CallResult`](../namespaces/internal.md#callresult)\>

CallResult

#### Overrides

[Account](internal-Account.md).[simulateTransaction](internal-Account.md#simulatetransaction)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:119

___

### transfer

▸ **transfer**(`destination`, `amount`, `assetId?`, `txParams?`): `Promise`<[`TransactionResponse`](internal-TransactionResponse.md)\>

Returns coins satisfying the spend query.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`AbstractAddress`](internal-AbstractAddress.md) | Address of the destination |
| `amount` | [`BigNumberish`](../namespaces/internal.md#bignumberish) | Amount of coins |
| `assetId?` | `BytesLike` | Asset ID of coins |
| `txParams?` | `Pick`<[`TransactionRequestLike`](../namespaces/internal.md#transactionrequestlike), ``"gasPrice"`` \| ``"gasLimit"`` \| ``"maturity"``\> | Tx Params |

#### Returns

`Promise`<[`TransactionResponse`](internal-TransactionResponse.md)\>

#### Inherited from

[Account](internal-Account.md).[transfer](internal-Account.md#transfer)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:46

___

### withdrawToBaseLayer

▸ **withdrawToBaseLayer**(`recipient`, `amount`, `txParams?`): `Promise`<[`TransactionResponse`](internal-TransactionResponse.md)\>

Withdraws an amount of the base asset to the base chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipient` | [`AbstractAddress`](internal-AbstractAddress.md) | Address of the recipient on the base chain |
| `amount` | [`BigNumberish`](../namespaces/internal.md#bignumberish) | Amount of base asset |
| `txParams?` | `Pick`<[`TransactionRequestLike`](../namespaces/internal.md#transactionrequestlike), ``"gasPrice"`` \| ``"gasLimit"`` \| ``"maturity"``\> | Tx Params |

#### Returns

`Promise`<[`TransactionResponse`](internal-TransactionResponse.md)\>

#### Inherited from

[Account](internal-Account.md).[withdrawToBaseLayer](internal-Account.md#withdrawtobaselayer)

#### Defined in

packages/wallet/dist/wallets-39b98c51.d.ts:58
