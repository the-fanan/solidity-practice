// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Functions {
    mapping(address => uint) public balanceReceived;
    address payable owner;
    
    // constructor is a function that is called only once when the contract is deployed
    constructor() {
        owner = payable(msg.sender);
    }
    
    function receiveMoney() public payable {
        assert(balanceReceived[msg.sender] + msg.value >= balanceReceived[msg.sender]);
        balanceReceived[msg.sender] += msg.value;
    }
    
    function withdrawMoney(address payable _to, uint _amount) public {
        require(_amount <= balanceReceived[msg.sender], "Insufficient funds");
        assert(balanceReceived[msg.sender] - _amount <= balanceReceived[msg.sender]);
        balanceReceived[msg.sender] -= _amount;
        _to.transfer(_amount);
    }
    
    // fallback function is a catch call function
    receive() external payable {
        // msg.data holds argument data in the fallback function
        receiveMoney();
    }
    
    // view functions return things to the client
    // they can only access state in a reading way
    // they can call pure functions but not writing functions
    function getOwner() public view returns(address) {
        return owner;
    }
    
    // writing functions can call view, pure, and other writing functions
    
    // pure functions are functions that do not interact with internal variables
    // they are like class/static functions
    // they cannot call view or writing functions
    function convertWeiToEther(uint _amountInWei) public pure returns(uint) {
        return _amountInWei / 1 ether; // note ether is a keyword
    }
    
    // Visibility of functions
    // public - can be called by itself and child contracts
    // private - can only be called by the contract itself
    // external - can be called from other contracts and transactions but not from the contract itself
    // internal - can only be called from within the contract and its child contracts. It cannot be invoked by transactions or other contracts
    // view - does not change the state of the chain and only returns data
    // virtual - means the function can be inherited and overriten and the function can be left blank (don't have to be implemented by the parent function).
    // override - means the function was inherited from a parent contract and is overriding the parent's function.
}