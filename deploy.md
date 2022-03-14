# Deploying your own cross-chain token 101

## Prerequisites

* Token & Logo data available on [coingecko.com](https://www.coingecko.com/en)

## Step 1: Fork AnyswapV6ERC20 and implement any additional functionality as required.

AnyswapV6ERC20 supports the following
* ERC2612 (Adds `permit`)
* ERC677 (Adds `approveAndCall` and `transferAndCall`)
* `transferWithPermit`
* Verify EIP712 and Verify `personalSign`
* AnyswapV6ERC20 needs to support `mint`, `burn`, `Swapin`, and `Swapout` to be compatible with multiple bridges.
* Multichain MPC address (detailed below) should be set via `initVault(address _vault)`

### Step 1.1: I already deployed my token

Deploy a wrapper for your token that supports `mint`, `burn`, `Swapin`, and `Swapout`, add this wrapper as a minter role in the ACL. In the wrapper add the MPC address (found below) as a minter

## Step 2: Deploy AnyswapV6ERC20 via AnyswapCREATE2

AnyswapCREATE2 is available on Ethereum, Fantom, Binance Smart Chain, xDAI, and Matic. More deployments to follow

Address: 0x54f5a04417e29ff5d7141a6d33cb286f50d5d50e

```
git clone https://github.com/anyswap/chaindata.git
npm install
-- edit deploy.js
node deploy.js
```

Edit lines 39 to 55

```
provider ~ choose from provider list for the chain
privateKey ~ address being used to deploy with
mpcAddress ~ address for MPC address on given chain
constructorArgs ~ token details (Token Name, Symbol, Decimals, Underlying token (optional))
verifyURL (optional) if you want to programmatically verify via etherscan/ftmscan/bscscan api
verifykey (optional) key to be used to verify via etherscan/ftmscan/bscscan
```

Deploy with the same code and salt to all the chains you wish to have your token on.

**NOTE** if you prefer to manually deploy, be sure to immediately call initVault(address _mpc) on the contract, as the default owner should be set to the deployer so the code matches on all deployments. Not even the constructor arguments should change on cross-chain deployments

## Step 3: Verify your contract on each individual chain (optional if deploy.js was not used)

Verify via;

* [Ethereum](https://etherscan.io/)
* [Binance Smart Chain](https://bscscan.com/)
* [Fantom](https://ftmscan.com/)
* [xDAI](https://blockscout.com/poa/xdai)
* [Polygon (Matic)](https://explorer-mainnet.maticvigil.com/)

## Step 4: Create a PR for your token into the token registry

Clone the anyswap/chaindata repo and submit a PR to chains.json with the following format;

```json
"yfi": {
  "srcChainID": "1",
  "destChainID": "56",
  "PairID": "YFI",
  "SrcToken": {
    "ID": "YFI",
    "Name": "yearn.finance",
    "Symbol": "YFI",
    "Decimals": 18,
    "Description": "yearn.finance",
    "DepositAddress": "0x13B432914A996b0A48695dF9B2d701edA45FF264",
    "mpcAddress": "0x13B432914A996b0A48695dF9B2d701edA45FF264",
    "ContractAddress": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    "MaximumSwap": 20,
    "MinimumSwap": 0.0005,
    "BigValueThreshold": 5,
    "SwapFeeRate": 0,
    "MaximumSwapFee": 0,
    "MinimumSwapFee": 0,
    "PlusGasPricePercentage": 10,
    "DisableSwap": false,
    "IsDelegateContract": false
  },
  "DestToken": {
    "ID": "anyYFI",
    "Name": "YFI-ERC20",
    "Symbol": "anyYFI",
    "Decimals": 18,
    "Description": "cross chain bridge YFI with anyYFI",
    "mpcAddress": "0x13B432914A996b0A48695dF9B2d701edA45FF264",
    "ContractAddress": "0x9883ae441105f815b472517389b979f031b5c87e",
    "MaximumSwap": 20,
    "MinimumSwap": 0.002,
    "BigValueThreshold": 2,
    "SwapFeeRate": 0.001,
    "MaximumSwapFee": 0.01,
    "MinimumSwapFee": 0.001,
    "PlusGasPricePercentage": 1,
    "DisableSwap": false,
    "IsDelegateContract": false
  }
}
```

If you are not sure on the chainID, you can confirm them on [chainid.network](https://chainid.network/chains.json)
Once the PR is accepted, the token will be merged and become available on [multichain.org](https://multichain.org/)
