const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  console.log("nftMarket deployed to:", nftMarket.address); //dpeloying contarct and printing address

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


  //npx hardhat node -> to run a local node
  // npx hardhat run scripts/deploy.js --network localhost -> to deploy 

// nftMarket deployed to: 0x89f2954396bA9185383c2565B16d2707C47bFb7f
// nft deployed to: 0x4D0939E84E5e31fC79c6Ca184dE63a1E6c71209A