const FungibleToken = artifacts.require('FungibleToken');
const FungibleTokenSale = artifacts.require('FungibleTokenSale');
require('dotenv').config({
  path: '../.env',
});

module.exports = async function (deployer, network, accounts) {
  const numberOfTokensToCreate = process.env.FUNGIBLE_TOKENS_TO_CREATE;
  await deployer.deploy(FungibleToken, numberOfTokensToCreate);

  const rateInWei = process.env.FUNGIBLE_TOKEN_RATE;
  await deployer.deploy(FungibleTokenSale, rateInWei, accounts[0], FungibleToken.address);
  const instance = await FungibleToken.deployed();
  await instance.transfer(FungibleTokenSale.address, numberOfTokensToCreate)
};