// scripts/ERC-20/erc20TransferFromSol.ts
import { ethers } from 'hardhat';

async function erc20TransferFrom() {
	const [addr1] = await ethers.getSigners();

	const instance = "0x66050daE1Ad17f046707DA5ab7B3DeA4ebF0e72B"
	// instance address 내 배포된 ERC20TransferFrom 가져오기
	const token = await ethers.getContractAt("ERC20TransferFrom", instance);
	console.log(token);
	// Etherscan을 통해 알아낸 token address
	const owner = "0x85ba85216cc19d106f82e7d605221d4cf7b6e2d3";
	// 인출 허용량 확인
	const allowence = (await token.allowance(owner, addr1.address)).toBigInt();
	console.log(allowence);
	// 인출
	const result = await token.transferFrom(owner, addr1.address, allowence);
	console.log(result);
}

async function main() {
	erc20TransferFrom();
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});