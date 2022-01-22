const chai = require('chai');
const chaiBN = require('chai-bn');
const chaiAsPromised = require('chai-as-promised');

const BIG_NUMBER = web3.utils.BN; // web3 is automatically injected by truffle
const CHAI_BIG_NUMBER = chaiBN(BIG_NUMBER);
chai.use(CHAI_BIG_NUMBER);
chai.use(chaiAsPromised);
const expect = chai.expect;

const Token = artifacts.require('FungibleToken');

contract('Token Test', async (accounts) => {
    const [deployerAccount, recipientAccount1,] = accounts;

    beforeEach(async () => {
        const numberOfTokensToDeploy = 1000;
        this.tokenContract = await Token.new(numberOfTokensToDeploy);
    });

    it('places all tokens in my account', async () => {
        const instance = this.tokenContract;
        const totalSupply = await instance.totalSupply();
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply); 
        //expect() is from chai
        // .eventually is from chaiAsPromised
    });

    it('cannot send more tokens than are available', async () => {
        const instance = this.tokenContract;
        const deployerBalance = await instance.balanceOf(deployerAccount);
        expect(instance.transfer(recipientAccount1, new BIG_NUMBER(deployerBalance + 1))).to.eventually.be.rejected;
        expect(instance.balanceOf(deployerAccount))
            .to.eventually.be.a.bignumber.equal(deployerBalance);
    });

    it('can send tokens between accounts', async () => {
        const numberOfTokensToSend = 2;
        const instance = this.tokenContract;
        const totalSupply = await instance.totalSupply();
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply);
        expect(instance.transfer(recipientAccount1, numberOfTokensToSend)).to.eventually.be.fulfilled;
        expect(instance.balanceOf(deployerAccount))
            .to.eventually.be.a.bignumber.equal(totalSupply.sub(new BIG_NUMBER(numberOfTokensToSend)));
        expect(instance.balanceOf(recipientAccount1))
            .to.eventually.be.a.bignumber.equal(new BIG_NUMBER(numberOfTokensToSend));
    });
});

// to run test run `truffle developer` in terminal
// then enter `test`

 