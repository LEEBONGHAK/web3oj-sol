// scripts/ERC-20/erc20MintableSol.ts
import { ethers } from 'hardhat';

async function erc20Mintable() {
	const [addr1] = await ethers.getSigners();
	// instance address
	const instance = "0x895C2FBf116e072Cf2a019F86F6D2bbB99c69056";
	// Etherscan으로 찾은 문제 생성자 address
	const creator = "0xFbc8c2E746a762af6AE80DcdCfeaA219c7BaBA9A";

	const ERC20MintableSol = await ethers.getContractFactory("ERC20MintableSol");
	const erc20MintableSol = await ERC20MintableSol.connect(addr1).deploy(creator);
	await erc20MintableSol.deployed();

	const ERC20MintableProblem = await ethers.getContractFactory("ERC20Mintable");
	const erc20MintableProblem = await ERC20MintableProblem.attach(instance);
	const result = await erc20MintableProblem.setToken(erc20MintableSol.address);
	console.log(result);
}

async function main() {
	erc20Mintable();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});
