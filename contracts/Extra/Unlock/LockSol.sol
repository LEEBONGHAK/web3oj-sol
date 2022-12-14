// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface LockProblem {
    function unlock() external;
}

contract LockSol {
    LockProblem public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = LockProblem(_contractAddress);
    }

    function executeUnlock() public {
		contractAddress.unlock();
	}
}