// scripts/plusCalculatorSol.ts
import { ethers } from 'hardhat';

async function calculaterSol() {
	const [addr1] = await ethers.getSigners();
	
	const MinusCalculatorSol = await ethers.getContractFactory("MinusCalculatorSol");
	const minusCalculatorSol = await MinusCalculatorSol.connect(addr1).deploy();
	await minusCalculatorSol.deployed();

	const instance = "0x1F74F428167AA2E402aff990d608f985ef2D1FcA";
	const MinusCalculatorProblem = await ethers.getContractFactory("MinusCalculatorProblem");
	const minusCalculatorProblem = await MinusCalculatorProblem.attach(instance);
	const result = await minusCalculatorProblem.setMinusCalculator(minusCalculatorSol.address);
	console.log(result);
}

async function main() {
	calculaterSol();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});