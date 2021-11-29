// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract StartStopDelete {
    address owner;
    bool paused;
    
    constructor() {
        // called only once during deployment
        owner = msg.sender;
    }
    
    function withdrawAllMoney(address payable _to) public {
        require(msg.sender == owner, "Only owner can withdraw money");
        _to.transfer(address(this).balance);
    }
    
    function setPaused(bool _paused) public {
        require(msg.sender == owner, "Only owner can pause this contract");
        require(paused, "Contract is paused");
        paused = _paused;
    }
    
    function destroySmartContract(address payable _to) public {
        require(msg.sender == owner, "Only owner can destroy contract");
        // this destroys the contract and sends the remaing funds in it to the specified address
        selfdestruct(_to);
    }
}