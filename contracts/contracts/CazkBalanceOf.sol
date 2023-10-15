// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@zk-kit/incremental-merkle-tree.sol/IncrementalBinaryTree.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract CazkBalanceOf is ERC20 {
    using IncrementalBinaryTree for IncrementalTreeData;

    IncrementalTreeData tree;

    constructor() {
        // Init with zero values
        tree.init(16, 0);
    }

    
}