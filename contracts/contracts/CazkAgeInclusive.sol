// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@zk-kit/incremental-merkle-tree.sol/IncrementalBinaryTree.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract CazkAgeInclusive {
    using IncrementalBinaryTree for IncrementalTreeData;

    IncrementalTreeData tree;

    constructor(uint256[] initialData) {
        // Init with zero values
        tree.initWithDefaultZeroes(16);
        for (uint8 i = 0; i < initialData.length; i++) {
            tree.insert(initalData);
        }
    }

    function _update(address from, address to, uint256 value) internal override {
        super._update(from, to, value);
        if(balanceOf(from) > 40) {
            tree.insert(from);
        } else {
        }

    }

    function getMerkleRoot() external view {
        return tree.root;
    }
}