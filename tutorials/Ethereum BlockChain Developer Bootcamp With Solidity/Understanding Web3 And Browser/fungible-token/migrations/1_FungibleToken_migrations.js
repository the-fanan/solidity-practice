const FungibleToken = artifacts.require('FungibleToken');
const FungibleTokenSale = artifacts.require('FungibleTokenSale');
const FungibleTokenKyc = artifacts.require('FungibleTokenKyc');
require('dotenv').config({
  path: '../.env',
});

module.exports = async function (deployer, network, accounts) {
  const numberOfTokensToCreate = process.env.FUNGIBLE_TOKENS_TO_CREATE;
  await deployer.deploy(FungibleToken, numberOfTokensToCreate);

  await deployer.deploy(FungibleTokenKyc);

  const rateInWei = process.env.FUNGIBLE_TOKEN_RATE;
  await deployer.deploy(FungibleTokenSale, rateInWei, accounts[0], FungibleToken.address, FungibleTokenKyc.address);
  const instance = await FungibleToken.deployed();
  await instance.transfer(FungibleTokenSale.address, numberOfTokensToCreate)
};