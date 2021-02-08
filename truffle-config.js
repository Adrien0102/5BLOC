const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777" // Match any network id
    }
  },
  compilers: {
    solc: {
       version: "0.7.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
  // rinkeby: {
  //   provider: function () {
  //     return new HDWalletProvider(
  //       [privateKey],
  //       `https://rinkeby.infura.io/v3/${process.env.INFURA_RINKEBY}`
  //     )
  //   },
  //   gas: 5000000,
  //   gasPrice: 250000000000,
  //   network_id: 4
  // }
};
