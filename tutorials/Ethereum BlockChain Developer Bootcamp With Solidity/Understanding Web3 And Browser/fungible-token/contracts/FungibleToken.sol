// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FungibleToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Flok Cowries", "FLK") {
        _mint(msg.sender, initialSupply);
    }

    // for handling decimals ERC20 uses default value of 18
    // I am setting to 0 as I do not want this token to have decimals
    // if it is left as 18, to send toke, amount will be calculated as 
    // AMOUNT_TO_SEND * 10^18
    function decimals() public view virtual override returns (uint8) {
        return 0;
    }
}