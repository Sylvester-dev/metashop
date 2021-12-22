require("@nomiclabs/hardhat-waffle");
const privateKey = "9dcf283071cfc84e514bc7555d319c09633fc6f0583c05cfae41d19945629c3d"
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      chainId:1337,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/3a07bc764d444aa99c75c2f2b5b2882c",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.3",
  },
}
