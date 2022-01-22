const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  let txn = await nftContract.makeAnEpicNFT()
  await txn.wait()
  console.log("Minted NFT #1")

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

// 1.deploy: 0x8e19269679467311244732E3694129bC0e9F16e2 (Testing Alchemy & OpenSea en Rinkeby testnet)
// 2.deploy: 0x709E015a452ceACF06558FA803eF5Df3e0b89803
// 3.deploy: 0x794c5e9BAf8E35b86Dc118D7beAb0a9F20074452 (new NFT codificado a base64)
// 4.deploy: 0xCf1c353B4c2C43b1b293850Dd445f171b42A1f29 (add json metadata, base64 librarie, arrays of words)