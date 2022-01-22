"use strict";

require('dotenv').config({
    path: '../../.env',
});

const chai = require('chai');
const chaiBN = require('chai-bn');
const chaiAsPromised = require('chai-as-promised');

const BIG_NUMBER = web3.utils.BN; // web3 is automatically injected by truffle
const CHAI_BIG_NUMBER = chaiBN(BIG_NUMBER);
chai.use(CHAI_BIG_NUMBER);
chai.use(chaiAsPromised); // so we can use `.eventually` along with expect()

module.exports = chai;