require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth scrub essay give enter bubble gate'; 
let testAccounts = [
"0x184569a500e1d2218620f78749a4cff8b54f3820a632f0577aeb37ab011e71a4",
"0xe3f8cd55f1213a6c89cf3774741781908e085de5710965f257651f53bf2ed1da",
"0x41d40f93d383164885657bf202f6bfdb049c8974854b0316e656aad11051943d",
"0x2a8c44d827f3767ab16a630f787defedc037022577fa113619b1b75283178297",
"0xb36b0bb132bad6924ada14af30b5b96d3b9d9afc7672edb2b563bc303d846fcf",
"0x19da2a6defac30d5ad2a3a4b93324bb0c430518a99d9af8638e3a28a1a225513",
"0x7425c89b7ab4e1ed871c6a584c4f0b2eda52be5d273fec41d9488aa8a0823264",
"0x73aed74e7062ca9fa2d2da53ba4ce04498090e9921faadd99bf7bcb41e644cbb",
"0xfbfb550235f8d039457fe7a608c7bd4c59e9474ad203f66a5cea7ef62ba52641",
"0x8288ab19ae795a68f74c51487f955fbf36925e6ccad8b21831e7940daa5cd77f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
