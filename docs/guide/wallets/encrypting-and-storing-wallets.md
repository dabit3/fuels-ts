---
title: "Encrypting And Storing Wallets"
parent: "Wallets"
grand_parent: "Guide"
---

[info]: this file is autogenerated
# Encrypting and storing wallets

## Creating a wallet and storing an encrypted JSON wallet on disk

You can also manage a wallet using [JSON wallets](https://cryptobook.nakov.com/symmetric-key-ciphers/ethereum-wallet-encryption) that are securely encrypted and stored on the disk. This makes it easier to manage multiple wallets, especially for testing purposes.

You can create a random wallet and, at the same time, encrypt and store it. Then, later, you can recover the wallet if you know the master password:


```typescript
    const walletManager = new WalletManager();
    const password = '0b540281-f87b-49ca-be37-2264c7f260f7';
    const wallet = Wallet.generate();

    await walletManager.unlock(password);
```
###### [see code in context](https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.test.ts#L123-L129)

---


## Encrypting and storing a wallet created from a mnemonic or private key

If you have already created a wallet Manager using a mnemonic phrase or a private key, you can also encrypt it and save it to disk:

```typescript
await walletManager.lock();
```
