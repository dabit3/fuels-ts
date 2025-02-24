---
title: "Bech32"
parent: "Types"
grand_parent: "Guide"
---

[info]: this file is autogenerated
# Bech32

The `Bech32Address` enables the use of addresses and contract ids in the bech32 format (using bech32m). They can easily be converted to their counterparts using [Address](./address.md).

Here are the main ways of creating a `Bech32Address`

```typescript
  import { Address } from 'fuels';

  const address = new Address(ADDRESS_BECH32);

  expect(address.toB256()).toEqual(ADDRESS_B256);
  expect(address.toBytes()).toEqual(ADDRESS_BYTES);
  // Hex string values are equivalent to B256
  expect(address.toHexString()).toEqual(ADDRESS_B256);
```
###### [see code in context](https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L42-L51)

---


> **Note:** when using a `Bech32Address` with an `Address` the HRP (Human-Readable Part) is set to **"fuel"** per default:


```typescript
export type Bech32Address = `fuel${string}`;
```
###### [see code in context](https://github.com/FuelLabs/fuels-ts/blob/master/packages/interfaces/src/index.ts#L3-L5)

---

