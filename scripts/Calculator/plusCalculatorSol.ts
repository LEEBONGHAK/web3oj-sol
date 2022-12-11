// scripts/Calculator/plusCalculatorSol.ts
import { ethers } from 'hardhat';

async function calculatorSol() {
	const [addr1] = await ethers.getSigners();
	
	const PlusCalculatorSol = await ethers.getContractFactory("PlusCalculatorSol");
	const plusCalculatorSol = await PlusCalculatorSol.connect(addr1).deploy();
	await plusCalculatorSol.deployed();

	const instance = "0xfF6B6Df6030238a9459e4B153997B7D3ca2093F0";
	const PlusCalculatorProblem = await ethers.getContractFactory("PlusCalculatorProblem");
	const plusCalculatorProblem = await PlusCalculatorProblem.attach(instance);
	const result = await plusCalculatorProblem.setPlusCalculator(plusCalculatorSol.address);
	console.log(result);
}

async function main() {
	calculatorSol();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});