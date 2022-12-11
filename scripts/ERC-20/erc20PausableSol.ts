// scripts/ERC-20/erc20PausableSol.ts
import { ethers } from 'hardhat';

async function erc20Pausable() {
	const [addr1] = await ethers.getSigners();
	const instance = "0x6a7fEA62AEA169014A5CAd0826A58b3243AA67Be";

	const erc20PausableProblem = await ethers.getContractAt("Web3OJTPausable", instance, addr1);
	const result = await erc20PausableProblem.pause();
	console.log(result);
}

async function main() {
	erc20Pausable();
}

main().catch(err => {
	console.error(err);
	process.exitCode = 1;
});