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
// 5.deploy: 0x489670A14743d0d51a61ee285C6B31936f25C751 (add event)
// 6.deploy: 0xCbBD5CF0BA4E464a6885a4160864B20F185c135f (add maxSupply)
// 7.deploy: 0x858a2c0D6Ae323efE9Fa06727EF57192Aff72f15 (fix event maxSupply)
// 8.deploy: 0x907078DB4B60AaF602e974416cd86F92E3532852 (add function, change NFT letter color)
// 9.deploy: 0xA0815dF9174405F40b5a262A5f1085439F5298Aa