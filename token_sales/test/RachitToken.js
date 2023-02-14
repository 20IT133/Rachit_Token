var RachitToken = artifacts.require("./RachitToken.sol");

contract('RachitToken', function(accounts) {

  it('sets the total supply upon deployment', function() {
    return RachitToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 800000, 'sets the total supply to 1,000,000');
    });
  });
})
