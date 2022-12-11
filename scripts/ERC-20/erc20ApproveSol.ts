// scripts/ERC-20/erc20ApproveSol.ts
import { ethers } from 'hardhat';

async function erc20Approve() {
	const [addr1] = await ethers.getSigners();

	const ERC20ApproveSol = await ethers.getContractFactory("ERC20ApproveSol");
	const erc20ApproveSol = await ERC20ApproveSol.connect(addr1).deploy();
	await erc20ApproveSol.deployed();
	
	const instance = "0x3F4725861539542Bb2b3e8f78E1d8d308F127510";
	await erc20ApproveSol.approve(instance, BigInt(20  * 1e18));

	const ERC20ApproveProblem = await ethers.getContractFactory("ERC20Approve");
	const erc20ApproveProblem = await ERC20ApproveProblem.attach(instance);
	const result = await erc20ApproveProblem.setWeb3ojt(erc20ApproveSol.address);
	console.log(result);
}

async function main() {
	erc20Approve();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});