const hre = require("hardhat");

async function main() {
  const FlufshToken = await hre.ethers.getContractFactory("FlufshToken");
  console.log("Depoying contract. Please wait...");
  const flufshToken = await FlufshToken.deploy(1000000000, 50);

  await flufshToken.deployed();

  console.log("Flufsh token is deployed", flufshToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
