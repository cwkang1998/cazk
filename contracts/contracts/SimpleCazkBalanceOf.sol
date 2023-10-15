// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract SimpleCazkBalanceOf is ERC20 {

    mapping(address => bool) conditionalMapping; 

    function _update(address from, address to, uint256 value) internal override {
        super._update(from, to, value);

        // Process from
        if(balanceOf(from) > 40 && conditionalMapping[from] = false) {
            conditionalMapping[from] = true;
        } else {
            conditionalMapping[from] = false;
        }
        // Process to
        if(balanceOf(to) > 40 && conditionalMapping[to] = false) {
            conditionalMapping[from] = true;
        } else {
            conditionalMapping[from] = false;
        }

    }

    function verify(address account, uint[] proof) external view returns (bool success) {
        return false;
    }
}