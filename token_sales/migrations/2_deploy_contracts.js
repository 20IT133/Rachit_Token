var RachitToken = artifacts.require("./RachitToken.sol");

module.exports = function(deployer) {
  deployer.deploy(RachitToken);
};
