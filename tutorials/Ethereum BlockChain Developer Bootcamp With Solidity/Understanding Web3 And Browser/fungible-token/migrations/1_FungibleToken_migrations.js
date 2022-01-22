const FungibleToken = artifacts.require('FungibleToken');

module.exports = async function (deployer, network, accounts) {
  // deployment steps
  await deployer.deploy(FungibleToken, 1000);
};