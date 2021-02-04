var SimpleStorage = artifacts.require("./SimpleStorage.sol");
// var Token = artifacts.require("Token");

module.exports = function(deployer) {
  // deployer.deploy(Token);
  deployer.deploy(SimpleStorage);
};

