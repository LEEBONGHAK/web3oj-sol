import { ethers } from 'hardhat';

async function calculatorSol() {
	const [addr1] = await ethers.getSigners();

	const MultiplicationCalculatorSol = await ethers.getContractFactory("MultiplicationCalculatorSol");
	const multiplicationCalculatorSol = await MultiplicationCalculatorSol.connect(addr1).deploy();
	await multiplicationCalculatorSol.deployed();

	const instance = "0x4d37E9BA74437e189E1FbCA867D75b2f68C5F071";
	const MultiplicationCalculatorProblem = await ethers.getContractFactory("MultiplicationCalculatorProblem");
	const multiplicationsCalculatorProblem = await MultiplicationCalculatorProblem.attach(instance);
	const result = await multiplicationsCalculatorProblem.setMultiplicationCalculator(multiplicationCalculatorSol.address);
	console.log(result);
}

async function main() {
	calculatorSol();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
})