// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract Libraries {
    using SafeMath for uint; // with for, the first argument for any function in the library will be the object making the call
    mapping(address => uint) public tokenBalance;
    
    constructor() {
        tokenBalance[msg.sender] = 1;
    }
    
    function sendToken(address _to, uint _amount) public returns(bool) {
        tokenBalance[msg.sender] = tokenBalance[msg.sender].sub(_amount); // we are able to have this sub property for ints because we used SafeMath
        tokenBalance[_to] = tokenBalance[_to].add(_amount);
        
        return true;
    }
}