const chai = require('./setup.js');
const expect = chai.expect;
const BIG_NUMBER = web3.utils.BN;

const Token = artifacts.require('FungibleToken');

contract('Token Test', async (accounts) => {
    const [deployerAccount, recipientAccount1,] = accounts;

    beforeEach(async () => {
        const numberOfTokensToDeploy = process.env.FUNGIBLE_TOKENS_TO_CREATE;
        this.tokenContract = await Token.new(numberOfTokensToDeploy);
    });

    it('places all tokens in my account', async () => {
        const instance = this.tokenContract;
        const totalSupply = await instance.totalSupply();
        await expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply); 
    });

    it('cannot send more tokens than are available', async () => {
        const instance = this.tokenContract;
        const deployerBalance = await instance.balanceOf(deployerAccount);
        await expect(instance.transfer(recipientAccount1, new BIG_NUMBER(deployerBalance + 1))).to.eventually.be.rejected;
        await expect(instance.balanceOf(deployerAccount))
            .to.eventually.be.a.bignumber.equal(deployerBalance);
    });

    it('can send tokens between accounts', async () => {
        const numberOfTokensToSend = 2;
        const instance = this.tokenContract;
        const totalSupply = await instance.totalSupply();
        await expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply);
        await expect(instance.transfer(recipientAccount1, numberOfTokensToSend)).to.eventually.be.fulfilled;
        await expect(instance.balanceOf(deployerAccount))
            .to.eventually.be.a.bignumber.equal(totalSupply.sub(new BIG_NUMBER(numberOfTokensToSend)));
        await expect(instance.balanceOf(recipientAccount1))
            .to.eventually.be.a.bignumber.equal(new BIG_NUMBER(numberOfTokensToSend));
    });
});

// to run test run `truffle developer` in terminal
// then enter `test`

 