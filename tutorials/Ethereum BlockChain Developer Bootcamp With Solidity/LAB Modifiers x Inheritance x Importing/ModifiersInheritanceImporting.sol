// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "./Owned.sol";

// to inherit/extend use *is*
// multiple inheritance is allowed
// if inherited contracts have the same function, the last inherited one's function is called
// to access the function in the base contract use "super"
// Note that only one smart contract gets deployed
contract ModifiersInheritanceImporting is Owned {
    mapping(address => uint) public tokenBalance;
    uint tokenPrice = 1 ether;
    
    constructor() {
        tokenBalance[owner] = 100;
    }
    
    function createNewToken() public onlyOwner {
        tokenBalance[owner]++;
    }
    
    function burnToken() public onlyOwner {
        tokenBalance[owner]--;
    }
    
    function purchaseToken() public payable {
       
    }
}