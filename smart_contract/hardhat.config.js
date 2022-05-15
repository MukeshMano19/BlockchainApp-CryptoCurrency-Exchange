// https://eth-ropsten.alchemyapi.io/v2/GXKGx7wOipeDc_HJPa_bs35RqoHljOEP

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/GXKGx7wOipeDc_HJPa_bs35RqoHljOEP",
      accounts: [
        "78961450dabe58223b7b0526c7f55cbcb0bb2f8dffc76ae2cef5624678974efa",
      ],
    },
  },
};
