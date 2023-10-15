// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";


contract CazkAgeInclusive is Ownable {
    uint256 public merkleRoot;

    constructor() Ownable(msg.sender) {}

    function setMerkleRoot(uint256 newRoot) external onlyOwner() {
        require(newRoot != merkleRoot);
        merkleRoot = newRoot;
    }

    function getMerkleroot() external view returns (uint256) {
        return merkleRoot;
    }

    function verify(uint[] memory proofData) external view {
        // to be implemented;
    }
}