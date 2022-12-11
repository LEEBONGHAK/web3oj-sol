// scripts/ERC-20/erc20InitSol.ts
import { ethers } from 'hardhat';

async function erc20InitSol() {
	const [addr1] = await ethers.getSigners();

	const ERC20InitSol = await ethers.getContractFactory("ERC20InitSol");
	const erc20InitSol = await ERC20InitSol.connect(addr1).deploy();
	await erc20InitSol.deployed();

	const instance = "0xe48033BBDF6cB2917dccD09621E5682B9279AC12";
	const ERC20InitProblem = await ethers.getContractFactory("ERC20Init");
	const erc20InitProblem = await ERC20InitProblem.attach(instance);
	const result = await erc20InitProblem.setWeb3ojt(erc20InitSol.address);
	console.log(result);
}

async function main() {
	erc20InitSol();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});