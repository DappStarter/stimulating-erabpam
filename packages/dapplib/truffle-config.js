require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin clog obscure share'; 
let testAccounts = [
"0xa8357d28bf0148a172770d4602b6039508c6bca122e004ee456e214126378af5",
"0x32466b1f0d108334544f8bb3c074755653cf432b19d853a658c838dd9afadc7a",
"0x6890591a9a60585f17715cac81316fd52d67b67a37cd88295f2bc54b6f2961c0",
"0x5f4653dc9865d9b4d79b4c2326aeb54bac9dbcf615054ac95f50519485db7051",
"0x70159759ca7dd77543b3fcad28f16fd5b7b15d51a65444e9beaa4aa0ecde737d",
"0xfea67dfa5c5b1487dac80902a511e51778b407acc083191b000247d4c9e2b873",
"0x840a0dbcfac24f36a2fe7cab4bb32bf1a7711552abe9e8a62b5f3764bf971da6",
"0x6a037035c2dc94419481b964e7bd693cae4f299254eadab3db46882e287fe803",
"0xd605b394e4ea9775c19aec1256740f3217b31e3f8120eeaedd9082e3592c0c70",
"0xfdd0e473dbc67875dc803d081a4f3e74bb6369672f03f64e5d31235e3fe9a285"
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
            version: '^0.8.0'
        }
    }
};

