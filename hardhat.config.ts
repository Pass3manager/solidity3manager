import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

let accounts = { mnemonic: process.env.MNEMONIC };

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "gnosis",
  networks: {
    hardhat: {},
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: accounts,
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts: accounts,
    },
  },
  etherscan: {
    customChains: [
      {
        network: "chiado",
        chainId: 10200,
        urls: {
          apiURL: "https://blockscout.com/gnosis/chiado/api",
          browserURL: "https://blockscout.com/gnosis/chiado",
        },
      },
      {
        network: "gnosis",
        chainId: 100,
        urls: {
          apiURL: "https://api.gnosisscan.io/api",
          browserURL: "https://gnosisscan.io/",
        },
      },
    ],
    apiKey: {
      chiado: process.env.CHIADO_APIKEY || "",
      gnosis: process.env.GNOSIS_APIKEY || "",
    },
  },
};

export default config;
