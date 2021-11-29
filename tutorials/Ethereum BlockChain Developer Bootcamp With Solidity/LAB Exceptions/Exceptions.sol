// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Exceptions {
    mapping(address => uint) public balanceReceived;
    
    function receiveMoney() public payable {
        //assert is used to ensure internal state is working as expected
        assert(balanceReceived[msg.sender] + msg.value >= balanceReceived[msg.sender]);
        balanceReceived[msg.sender] += msg.value;
    }
    
    function withdrawMoney(address payable _to, uint _amount) public {
        require(_amount <= balanceReceived[msg.sender], "Insufficient funds");
        // you can also use revert
        if (_amount >= balanceReceived[msg.sender]) {
            revert("Insufficient funds");
        }
        assert(balanceReceived[msg.sender] - _amount <= balanceReceived[msg.sender]);
        balanceReceived[msg.sender] -= _amount;
        _to.transfer(_amount);
    }
}