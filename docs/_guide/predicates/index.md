[nav_order: 6]

# Predicates

Predicates, in Sway, are programs that return a Boolean value, and they do not have any side effects (they are pure).

## Instantiating predicates

Similar to contracts, once you've written a predicate in Sway and compiled it with `forc build` (read [here](https://fuellabs.github.io/sway/v{{site.data.versions.sway}}/book/introduction/index.html) for more on how to work with Sway), you'll get the predicate binary. Using the binary, you can instantiate a `predicate` as shown in the code snippet below:

[@code:typescript](./packages/fuel-gauge/src/doc-examples.test.ts#typedoc:predicate-basic)

The created `predicate` instance has two fields. The predicate `bytes (byte code)` and the predicate `address`. This address is generated from the byte code and is the same as the `P2SH` address used in Bitcoin. Users can seamlessly send assets to the predicate address as they do for any other address on the chain. To spend the predicate funds, the user has to provide the original `byte code` of the predicate together with the `predicate data`. The `predicate data` will be used when executing the `byte code`, and if the predicate is validated successfully, the funds will be accessible.

In the next section, we show how to interact with a predicate and explore an example where specific signatures are needed to spend the predicate funds.

## Calling a predicate with a `main` function that takes arguments

Suppose your Sway predicate `main` function is written using the arguments passed to the `main` function like so:

[@code:rust](./packages/fuel-gauge/test-projects/predicate-main-args-struct/src/main.sw#typedoc:Predicate-main-args)

You can still create a `Predicate` in the same way as above, but you can pass in a `JsonAbi` using the JSON generated from `forc`.
