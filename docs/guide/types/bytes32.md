---
title: "Bytes32"
parent: "Types"
grand_parent: "Guide"
---

[info]: this file is autogenerated
# Bytes32

In Sway and the FuelVM, `Bytes32` represents hashes. They hold a 256-bit (32-byte) value.

These are the main ways of creating a `Bytes32`:


```typescript
  import { ZeroBytes32, randomBytes } from 'fuels';

  const random32Bytes: Bytes = randomBytes(32);
  const random32BytesString: string = hexlify(random32Bytes);
  const zeroed32Bytes: string = ZeroBytes32;

  // a byte32 array can be safely passed into arrayify more than once without mangling
  expect(arrayify(random32Bytes)).toEqual(arrayify(random32BytesString));

  // a byte32 string can be safely passed into hexlify more than once without mangling
  expect(zeroed32Bytes).toEqual(hexlify(zeroed32Bytes));
```
###### [see code in context](https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L96-L108)

---


> **Note:** In Fuel, there's a special type called `b256`, which is similar to `Bytes32`; also used to represent hashes, and it holds a [256 Bit](./bits256.md) value.
