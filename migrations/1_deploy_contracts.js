var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Education = artifacts.require("./EducationContract.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Education);
};
