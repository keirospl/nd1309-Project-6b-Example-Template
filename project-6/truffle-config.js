const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const infuraKey =  fs.readFileSync("../../infuraKey.sec").toString();
const mnemonic = fs.readFileSync("../../mnemonic.sec").toString()

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
        network_id: 11155111,       // sepolia's id
        gas: 80000,
        gasPrice: 100000000000,
    },
  },
  compilers: { solc: { version: "0.4.24" } }
};