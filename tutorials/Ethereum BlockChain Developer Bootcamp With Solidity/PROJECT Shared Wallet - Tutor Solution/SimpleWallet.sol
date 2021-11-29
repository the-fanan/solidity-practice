// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import './Allowance.sol';

contract SimpleWallet is Allowance {
    // events can listen to things on the blockchain without initiating a transaction
    // indexing allows us to search for this information on the blockchain
    event MoneySent(address indexed _beneficiary, uint _amount);
    event MoneyReceived(address indexed _from, uint _amount);
    // notice how we transfer arguments from function to modifier
    function withdrawMoney(address payable _to, uint _amount) public ownerOrAllowed(_amount) {
        require(_amount <= address(this).balance, "Amount must be smaller than contract balance");
        if(owner() != _msgSender()) {
            reduceAllowance(_msgSender(), _amount);
        }
        emit MoneySent(_to, _amount);
        _to.transfer(_amount);
    }

    function renounceOwnership() public virtual override onlyOwner{
        revert("Ownership cannot be renounced");
    }

    receive() external payable {
        emit MoneyReceived(_msgSender(), msg.value);
    }
}