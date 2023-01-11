import { ethers } from 'hardhat';

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = 'ipfs://QmYc15Cg9mv5UMnmC31oR4usXJs35n7Bn3DDWtfy9fyYV3/';
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  const lw3PunksContract = await ethers.getContractFactory('LW3Punks');

  // deploy the contract
  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);

  await deployedLW3PunksContract.deployed();

  // print the address of the deployed contract
  console.log('LW3Punks Contract Address:', deployedLW3PunksContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
