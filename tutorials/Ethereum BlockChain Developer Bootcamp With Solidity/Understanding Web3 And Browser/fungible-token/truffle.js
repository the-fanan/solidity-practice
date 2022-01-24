const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv');
const mnemonic = process.env.HD_WALLET_MNEMONIC;
const accountIndex = process.env.ACCOUNT_INDEX;
const providerURI = process.env.BLOCKCHAIN_HTTP_PROVIDER_URI;

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "5777",
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(mnemonic, providerURI, accountIndex);
            },
            network_id: "5777",
        }
    },
    compilers: {
        solc: {
            version: "^0.8.0",
        }
    },
    test_directory: './tests/contracts',
};