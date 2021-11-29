// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract WorkingWithVariables {
    // All variables are intialized with their default values. There are not nulls
    // default for int is 0
    // string is ''
    // boolean is false
    
    // uint8 => 0 to 255
    // int8 => -128 to +127
    // uint = uint256 => 0 to 2**256 // this is the largest value
    uint256 public myUint;
    // floats are not implemented yet
    // so have one variable for the number and another for decimals. 12 dp is enough
    
    function setMyUint(uint _myUint) public {
        myUint = _myUint;
    }
    
    bool public myBool;
    
    // address variable type is use to hold wallet addresses
    // an address holds 20 bytes
    // they transfer ether from smart contracts to address or from address to smart contracts
    // .transfer() -> send funds
    // .send() -> send funds
    // .call.value()
    // .delegatecall()
    // there is a difference between address and address payable
    address public myAddress;
    function setAddress(address _address) public {
        myAddress = _address;
    }
    
    // view functions are used for reading
    // public variables augenerate a view function for themselves
    // hence, you can't have a public function and another function with the same name
    
    function getAddressBalance() public view returns(uint) {
        return myAddress.balance;
    }
    
    // strings cannot be concatenated
    // strings cannot be searched
    string public myString;
    function setMyString(string memory _myString) public {
        myString = _myString;
    }
}