// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Owned {
    address owner;
    constructor() {
        owner = msg.sender;
    }
    // everything up to the _; is copied into whatever function uses the modifier
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can create new token");
        _; // this is important
    }
}