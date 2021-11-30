// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SmartContract {
    uint256 public myUint;

    function setMyUint(uint _myUint) public {
        myUint = _myUint;
    }
}