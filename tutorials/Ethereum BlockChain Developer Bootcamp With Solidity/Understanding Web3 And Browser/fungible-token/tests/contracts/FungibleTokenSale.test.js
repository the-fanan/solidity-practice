const chai = require('./setup.js');
const expect = chai.expect;
const BIG_NUMBER = web3.utils.BN;

const TokenSale = artifacts.require('FungibleTokenSale');
const Token = artifacts.require('FungibleToken');
const Kyc = artifacts.require('FungibleTokenKyc');

contract('Token Sale Test', async (accounts) => {
    const [deployerAccount, recipientAccount1, recipientAccount2,] = accounts;

    beforeEach(async () => {
        this.tokenSale = await TokenSale.deployed();
        this.token = await Token.deployed();
        this.kyc = await Kyc.deployed();
    });

    it('should not have any tokens in deployer account', async () => {
        const instance = this.token;
        await expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BIG_NUMBER(0)); 
    });

    it('should have all tokens in Token Sale Smart Contract', async () => {
        const instance = this.token;
        const tokenSaleTokenBalance = await instance.balanceOf(this.tokenSale.address);
        const totalSupply = await instance.totalSupply();
        await expect(tokenSaleTokenBalance).to.be.a.bignumber.equal(totalSupply); 
    });

    it('should allow tokens to be purchased', async () => {
        const tokenInstance = this.token;
        const tokenSaleInstance = this.tokenSale;
        const deployerTokenBalanceBefore = await tokenInstance.balanceOf(deployerAccount);

        await this.kyc.setKycCompleted(deployerAccount, {from: deployerAccount});

        await expect(tokenSaleInstance.sendTransaction({
            from: deployerAccount, 
            value: web3.utils.toWei('1', 'wei')
        }))
        .to.be.fulfilled;
        
        await expect(tokenInstance.balanceOf(deployerAccount))
        .to.eventually.be.a.bignumber
        .equal(deployerTokenBalanceBefore.add(new BIG_NUMBER(1)));
    });
});