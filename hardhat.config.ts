import "@nomiclabs/hardhat-waffle";
import "tsconfig-paths/register";
import { task, HardhatUserConfig } from "hardhat/config";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.7.3"
};

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

export default config;