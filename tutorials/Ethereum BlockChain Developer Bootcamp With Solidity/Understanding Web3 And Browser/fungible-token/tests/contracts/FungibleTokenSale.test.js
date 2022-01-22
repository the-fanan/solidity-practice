const chai = require('./setup.js');
const expect = chai.expect;
const BIG_NUMBER = web3.utils.BN;

const TokenSale = artifacts.require('FungibleTokenSale');
const Token = artifacts.require('FungibleToken');

contract('Token Sale Test', async (accounts) => {
    const [deployerAccount,] = accounts;

    beforeEach(async () => {
        const numberOfTokensToDeploy = process.env.FUNGIBLE_TOKENS_TO_CREATE;
        const rateInWei = process.env.FUNGIBLE_TOKEN_RATE;
        this.tokenSale = await TokenSale.new(rateInWei, deployerAccount, Token.address);
        this.token = await Token.new(numberOfTokensToDeploy);
    });

    it('should not have any tokens in deployer account', async () => {
        const instance = await Token.deployed();
        await expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BIG_NUMBER(0)); 
    });
});