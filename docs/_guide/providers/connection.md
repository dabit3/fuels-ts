[nav_order: 1]

# Connecting to a Fuel node

At a high level, you can use the Fuel TypeScript SDK to build applications that can run computations on the Fuel Virtual Machine through interactions with smart contracts written in Sway.

For this interaction to work, the SDK must be able to communicate with a `fuel-core` node; you have two options at your disposal:

1. Use the [Testnet](../providers/connecting-to-an-external-node.md) or run a Fuel node (using `fuel-core`) and instantiate a provider that points to that node's IP and port.
2. Use Docker - `pnpm services:run`
3. Use [fuelup](https://github.com/FuelLabs/fuelup)

The second/third options are ideal for smart contract testing, as you can quickly spin up and tear down nodes between specific test cases.

For application building, you should use the first option.
