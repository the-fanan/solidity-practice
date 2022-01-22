// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './Crowdsale.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract FungibleTokenSale is Crowdsale {
    // rate - how much wei can be used purchase a token
    // wallet - wallet that collected ether should be sent to
    // token - the token being purchased
    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token
    ) 
    Crowdsale(rate, wallet, token)
    public
    {
    
    }
}