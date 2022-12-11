// scripts/Calculator/divisionCalculatorSol.ts
import { ethers } from 'hardhat';

async function calculatorSol() {
	const [addr1] = await ethers.getSigners();

	const DivisionCalculatorSol = await ethers.getContractFactory("DivisionCalculatorSol");
	const divisionCalculatorSol = await DivisionCalculatorSol.connect(addr1).deploy();
	await divisionCalculatorSol.deployed();

	const instance = "0xdb104370b3B9BEa5F1451EdDC4Acdd81f90c4a19";
	const DivisionCalculatorProblem = await ethers.getContractFactory("DivisionCalculatorProblem");
	const divisionCalculatorProblem = await DivisionCalculatorProblem.attach(instance);
	const result = await divisionCalculatorProblem.setDivisionCalculator((await divisionCalculatorSol).address);
	console.log(result);
}

async function main() {
	calculatorSol();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});