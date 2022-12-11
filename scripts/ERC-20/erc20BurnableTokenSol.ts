// scripts/ERC-20/erc20BurnableTokenSol.ts
import { ethers } from 'hardhat';

async function erc20BurnableToken() {
	const [addr1] = await ethers.getSigners();
	const instance = "0x64A72f183C88513f1eE062dfF8Bd059761d8d170";

	const erc20BurnableTokenProblem = await ethers.getContractAt("ERC20BurnableToken", instance);
	const result = await erc20BurnableTokenProblem.burn(BigInt(20 * 1e18));
	console.log(result);
}

async function main() {
	erc20BurnableToken();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});