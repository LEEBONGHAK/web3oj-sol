// scripts/Extra/receiveEtherFunctionSol.ts
import { ethers } from 'hardhat';

async function receiveEtherFunction() {
	const [addr1] = await ethers.getSigners();
	const instance = "0xc5fb5aB2EA4866Ab04afE7EbC92D2Ed25fBfa522";

	const ReceiveEtherFunctionSol = await ethers.getContractFactory("ReceiveEtherFunctionSol");
	const receiveEtherFunctionSol = await ReceiveEtherFunctionSol.connect(addr1).deploy();
	
	await receiveEtherFunctionSol.deployed();

	const ReceiveEtherFunctionProblem = await ethers.getContractFactory("ReceiveEtherFunctionProblem");
	const receiveEtherFunctionProblem = await ReceiveEtherFunctionProblem.attach(instance);
	const result = await receiveEtherFunctionProblem.setReceiveEtherAddress(receiveEtherFunctionSol.address);
	console.log(result);
}

async function main() {
	receiveEtherFunction();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});