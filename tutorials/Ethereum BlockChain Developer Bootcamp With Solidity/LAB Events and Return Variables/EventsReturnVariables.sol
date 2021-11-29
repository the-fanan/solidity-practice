// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract EventsReturnVariables {
    mapping(address => uint) public tokenBalance;
    
    constructor() {
        tokenBalance[msg.sender] = 100;
    }
    
    event TokenSent(address _from, address _to, uint _amount);
    
    // notice that the return here will be able to return true to other functions in this contract but not to the person making the transaction
    // for output to be recorded on the blockchain you need to use events 
    // writing functions do not return anything because they return a transaction hash
    // you can index a parameter and search for it later on on the site chain
    // events can be used to return values, trigger functionality, or as a cheap storage mechanism
    function sendToken(address _to, uint _amount) public returns(bool) {
        require(tokenBalance[msg.sender] >= _amount, "Insufficient tokens");
        assert(tokenBalance[_to] + _amount >= tokenBalance[_to]);
        assert(tokenBalance[msg.sender] - _amount <= tokenBalance[msg.sender]);
        tokenBalance[msg.sender] -= _amount;
        tokenBalance[_to] += _amount;
        emit TokenSent(msg.sender, _to, _amount);
        return true;
    }
}