import { ethers } from "hardhat";

async function main() {
  const Pass3Manager = await ethers.getContractFactory("Pass3Manager");
  const pass3Manager = await Pass3Manager.deploy();

  await pass3Manager.deployed();

  console.log(`Pass3Manager deployed to ${pass3Manager.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
