// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Allowance is Ownable{
    using SafeMath for uint;

    mapping(address => uint) public allowance;
    // indexing allows us to search for this information on the blockchain
    event AllowanceChanged(address indexed _forWho, address indexed _fromWho, uint _oldAmount, uint _newAmount);

    function addAllowance(address _who, uint _amount) public onlyOwner {
        emit AllowanceChanged(_who, _msgSender(), allowance[_who], _amount);
        allowance[_who] = _amount;
    }

    modifier ownerOrAllowed(uint _amount) {
        // owner() and _msgSender() are provided by openzeppelin Ownable Contract
        require(owner() == _msgSender() || allowance[msg.sender] >= _amount, "You are not allowed");
        _;
    }

    function reduceAllowance(address _who, uint _amount) internal {
        emit AllowanceChanged(_who, _msgSender(), allowance[_who], allowance[_who].sub(_amount));
        allowance[_who] = allowance[_who].sub(_amount);
    }
}