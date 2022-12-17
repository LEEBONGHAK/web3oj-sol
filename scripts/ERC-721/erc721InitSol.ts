// scripts/ERC-721/erc721InitSol.ts
import { ethers } from 'hardhat';

async function ERC721Init() {
	const [addr1] = await ethers.getSigners();

	const ERC721InitSol = await ethers.getContractFactory("ERC721InitSol");
	const erc721InitSol = await ERC721InitSol.connect(addr1).deploy(addr1.address);
	await erc721InitSol.deployed();

	const instance = "0x33F061184a6d7473BA30e9F2A83438ccb80669b1";
	
	const ERC721InitProblem = await ethers.getContractFactory("ERC721Init");
	const erc721InitProblem = await ERC721InitProblem.attach(instance);
	const result = await erc721InitProblem.setWeb3ojNFT(erc721InitSol.address);
	console.log(result);
}

async function main() {
	ERC721Init();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});