import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import "@nomiclabs/hardhat-etherscan";
import { task } from "hardhat/config";
import { HardhatUserConfig } from "hardhat/config";
import NETWORKS_CONFIG from "./networks.private.json";
import apikeys from "./apikeys.private.json";

task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  // etherscan: {
  //   apiKey: apikeys.etherscan,
  // },
  gasReporter: {
    currency: "USD",
    gasPrice: 20,
    // coinmarketcap: apikeys.coinmarketcap,
  },
  networks: {
    hardhat: {
      // fix metamask
      chainId: 1337,
    },
    // mumbai: {
    //   chainId: 80001,
    //   url: "https://rpc-mumbai.maticvigil.com",
    // },
    ...NETWORKS_CONFIG,
  },
  namedAccounts: {
    deployer: 0,
    purchaser: 0,
    auctionHouse: {
      0: "0xE468cE99444174Bd3bBBEd09209577d25D1ad673",
      4: "0xE7dd1252f50B3d845590Da0c5eADd985049a03ce",
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.6.8",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      {
        version: "0.8.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

export default config;
