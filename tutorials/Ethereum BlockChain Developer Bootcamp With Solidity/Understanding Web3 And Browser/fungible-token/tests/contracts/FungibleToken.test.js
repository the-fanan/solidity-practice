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
    it('places all tokens in my account', async () => {
        const instance = await Token.deployed();
        const totalSupply = await instance.totalSupply();
        expect(instance.balanceOf(accounts[0])).to.eventually.be.a.bignumber.equal(totalSupply); 
        //expect() is from chai
        // .eventually is from chaiAsPromised
    });
});

// to run test run `truffle developer` in terminal
// then enter `test`

 