// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20Mintable {
    function mint(address to, uint256 amount) external;
}

contract ERC20MintableSol is ERC20, Ownable, IERC20Mintable {
	constructor(address newOwner) ERC20("MyNewToken", "MNT") {
		_transferOwnership(newOwner);
	}

	function mint(address to, uint256 amount) 
		override 
		external 
	{
		_mint(to, amount);
	}
}