require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.INFRA_RINKEBY_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
      // chainId: 5,
    },
  },
};
