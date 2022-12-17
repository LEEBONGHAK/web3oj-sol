// scripts/ERC-721/erc721ApproveSol.ts
import { ethers } from 'hardhat';

async function ERC721Approve() {
	const [addr1] = await ethers.getSigners();
	const instance = "0x5D3Eef7eA3d8c0bf4b45dE750e54F8cA5261F5C2";

	const erc721ApproveSol = await ethers.getContractAt("ERC721ApproveSol", instance, addr1);
	const result = await erc721ApproveSol.approve(instance, 0);
	console.log(result);
}

async function main() {
	ERC721Approve();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});