const FungibleToken = artifacts.require('FungibleToken');
const FungibleTokenSale = artifacts.require('FungibleTokenSale');

module.exports = async function (deployer, network, accounts) {
  const numberOfTokensToCreate = 1000;
  await deployer.deploy(FungibleToken, numberOfTokensToCreate);

  const rateInWei = 1;
  await deployer.deploy(FungibleTokenSale, rateInWei, accounts[0], FungibleToken.address);
  const instance = await FungibleToken.deployed();
  await instance.transfer(FungibleTokenSale.address, numberOfTokensToCreate)
};