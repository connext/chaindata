# Cross-chain EVM-based Tokens

* [multichain.xyz](https://multichain.xyz)
* [anyswap.exchange](http://anyswap.exchange/bridge)
* [Polygon Bridge](https://wallet.matic.network/bridge/)
* [xDAI bridge](https://dai-bridge.poa.network/)

Live data source available on [chainid.json](https://bridgeapi.anyswap.exchange/v2/serverInfo/chainid)

Deploy your own token and create a PR by following the [guide](./deploy.md)

## Example

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

# EVM-based Chains

 * [chainlist.org](https://chainlist.org)
 * [chainid.network](https://chainid.network)

Listed by chainId according to EIP-155

Data source available on [~/ethereum-lists/chains/_data/chains.json](https://github.com/ethereum-lists/chains/tree/master/_data/chains)

## Example

```json
{
  "name": "Ethereum Mainnet",
  "chain": "ETH",
  "network": "mainnet",
  "rpc": [
    "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
    "https://api.mycryptoapi.com/eth"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://ethereum.org",
  "shortName": "eth",
  "chainId": 1,
  "networkId": 1
}
```
