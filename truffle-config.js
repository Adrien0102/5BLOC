const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
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
