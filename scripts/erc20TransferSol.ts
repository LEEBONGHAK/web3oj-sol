// scripts/erc20TransferSol.ts
import { ethers } from 'hardhat';

async function erc20Transfer() {
	const [addr1] = await ethers.getSigners();

	const ERC20TransferSol = await ethers.getContractFactory("ERC20TransferSol");
	const erc20TransferSol = await ERC20TransferSol.connect(addr1).deploy();
	await erc20TransferSol.deployed();

	const instance = "0xF120c33e1F68f8259C65B28878D9c100a80FDd8A";
	await erc20TransferSol.transfer(instance, BigInt(20  * 1e18));

	const ERC20TransferProblem = await ethers.getContractFactory("ERC20Transfer");
	const erc20TransferProblem = await ERC20TransferProblem.attach(instance);
	const result = await erc20TransferProblem.setWeb3ojt(erc20TransferSol.address);
	console.log(result);
}

async function main() {
	erc20Transfer();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});