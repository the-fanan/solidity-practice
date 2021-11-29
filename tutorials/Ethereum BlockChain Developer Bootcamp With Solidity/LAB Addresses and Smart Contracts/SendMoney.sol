// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SendMoney {
    uint public balanceReceived;
    
    function receiveMoney() public payable {
        // msg.value contains the wei received
        // 1 ether = 10**18 wei
        balanceReceived += msg.value;
    }
    
    // every contract deployed has it's own address
    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }
    
    function withdrawMoney() public {
        address payable to = payable(msg.sender);
        // transfer() transfers money to the address
        to.transfer(this.getContractBalance());
    }
    
    function withdrawMoneyTo(address payable _to) public {
        // it is the person who initiated this that will get billed for gas fees
        _to.transfer(this.getContractBalance());
    }
    
    
}