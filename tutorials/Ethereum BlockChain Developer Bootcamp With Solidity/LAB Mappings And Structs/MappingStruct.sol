// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract MappingStruct {
    mapping(uint => bool) public myMapping;
    mapping(address => bool) public addressMapping;
    
    // structs are like objects
    struct Payment {
        uint amount;
        uint timestamp;
    }
    
    struct Balance {
        uint totalBalance;
        uint numPayments;
        mapping(uint => Payment) payments;
    }
    
    mapping(address => Balance) public balanceReceived;
    
    function setMyMappingValue(uint _index) public {
        myMapping[_index] = true;
    }
    
    function setAddressMapping(address _address) public {
        addressMapping[_address] = true; // or msg.sender
    }
    
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }
    // payable means this function would trigger money to be collectted
    // how do I verify the amount is enough?
    function sendMoney() public payable {
        balanceReceived[msg.sender].totalBalance += msg.value;
        // structs are reference types so we must specify where they should be sotred
        Payment memory payment = Payment(msg.value, block.timestamp);
        balanceReceived[msg.sender].payments[balanceReceived[msg.sender].numPayments] = payment;
        balanceReceived[msg.sender].numPayments++;
    }
    
    function withdrawMoney(address payable _to, uint _amount) public {
        require(balanceReceived[msg.sender].totalBalance >= _amount, "Insufficient funds");
        balanceReceived[msg.sender].totalBalance -= _amount;
        _to.transfer(_amount);
    }
    
    function withdrawAllMoney(address payable _to) public {
        uint balanceToSend = balanceReceived[msg.sender].totalBalance;
        balanceReceived[msg.sender].totalBalance = 0;
        _to.transfer(balanceToSend);
    }
}