// scripts/Extra/lockSol.ts
import { ethers } from 'hardhat';

async function lock() {
	const [addr1] = await ethers.getSigners();
	const instance = "0x09778a84Eb9F14A3Fbb48e007efEc97dE60ecA3E";

	const LockSol = await ethers.getContractFactory("LockSol");
	const lockSol = await LockSol.connect(addr1).deploy(instance);
	await lockSol.deployed();

	const result = await lockSol.executeUnlock();
	console.log(result);
}

async function main() {
	lock();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});