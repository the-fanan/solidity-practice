// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';

// Create Shared Wallet that will have the following capabilities
// - Allow anybody to deposit money
// - Allow only owner of the contract withdraw all the money in the contract
// - Dependants (non-owners) can withdraw a specific amount
// - Only owner can change the allowance of the dependants

contract SharedWallet {
    using SafeMath for uint;
    
    address owner;
    uint balance;
    struct Wallet {
        uint allowance;
        uint allowanceSpent;
    }
    mapping(address => Wallet) public dependants;
    
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    
    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }
    
    function sendMoneyToContract() public payable {
        balance = balance.add(msg.value);
    }
    
    function ownerWithdrawal(address payable _to, uint _amount) public onlyOwner {
        require(_amount <= balance, "Insufficient funds");
        balance = balance.sub(_amount);
        _to.transfer(_amount);
    }
    
    // increase or decrease the dependant's max spend
    function setDependantAllowance(address _dependant, uint _allowance) public onlyOwner {
        dependants[_dependant].allowance = _allowance;
    }
    
    // reset the dependant allowanceSpent
    function resetDependantAllowanceSpent(address _dependant) public onlyOwner {
        dependants[_dependant].allowanceSpent = 0;
    }
    
    function dependantWithdrawal(address payable _to, uint _amount) public {
        uint dependantBalance = dependants[msg.sender].allowance;
        dependantBalance = dependantBalance.sub(dependants[msg.sender].allowanceSpent);
        require(dependantBalance >= _amount, "Insufficient funds");
        dependants[msg.sender].allowanceSpent = dependants[msg.sender].allowanceSpent.add(_amount);
        balance = balance.sub(_amount);
        _to.transfer(_amount);
    }
    
    receive() external payable {
        sendMoneyToContract();
    }
}