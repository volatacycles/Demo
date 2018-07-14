// abis
const ERC20 = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
const BIKECOIN_NETWORK_ABI = require("./bikeCoinNetwork.json");
const BIKECOIN_USER_PROFILE_ABI = require("./bikeCoinUserProfile.json");
const BIKECOIN_OWNER_SHIP_PROTOCOL_ABI = require("./bikeCoinOwnerShipProtocol.json");

const TX_RELAY_ABI = [{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"whitelist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sigV","type":"uint8"},{"indexed":false,"name":"sigR","type":"bytes32"},{"indexed":false,"name":"sigS","type":"bytes32"},{"indexed":false,"name":"destination","type":"address"},{"indexed":false,"name":"data","type":"bytes"},{"indexed":false,"name":"listOwner","type":"address"}],"name":"RelayedMetaTx","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"claimedSender","type":"address"},{"indexed":false,"name":"h","type":"bytes32"}],"name":"LogAddress","type":"event"},{"constant":false,"inputs":[{"name":"sigV","type":"uint8"},{"name":"sigR","type":"bytes32"},{"name":"sigS","type":"bytes32"},{"name":"destination","type":"address"},{"name":"data","type":"bytes"},{"name":"listOwner","type":"address"}],"name":"relayMetaTx","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"b","type":"bytes"}],"name":"getAddress","outputs":[{"name":"a","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"add","type":"address"}],"name":"getNonce","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sendersToUpdate","type":"address[]"}],"name":"addToWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sendersToUpdate","type":"address[]"}],"name":"removeFromWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
// contract datas
// compiled with v0.4.11+commit.68ef5810

const BIKECOIN_TOKEN_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];

const BIKECOIN_TOKEN_ADDRESS = "0x4c9aa6ca9cbc1fa4b3b5c68ea32c247d7b060b32";

// constants
const EPSILON = 1000;
const RATE_EPSILON = 0.002;
const ETHER_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

//prod
const NETWORK_ADDRESS = "0xdfd73fc3e1bc0319a981817f5c59e87fdbea8147";

const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";
const BIKECOIN_NETWORK_ADDRESS = "0xdfd73fc3e1bc0319a981817f5c59e87fdbea8147";
const BIKECOIN_OWNER_SHIP_ADDRESS = "0x86fc70b4c658ee14d00f417d13a5ae19063e52cc";
const BIKECOIN_APIKEY = "SF26B7TY2YRUPHEBAHHPBV1AHD8SN5ETPI";
const TX_RELAY_ADDRESS = "0x20f2f0eb661db8c8e52e3b5bca64bb80c8838afa";

///////////////*******REMOTE HOST********///////////////////////
const REMOTE_API_HOST = "http://localhost:3000";
///////////////*******REMOTE HOST********///////////////////////

export default {
    ERC20, BIKECOIN_NETWORK_ABI, BIKECOIN_USER_PROFILE_ABI,  EPSILON, ETHER_ADDRESS,
    NETWORK_ADDRESS,
    RATE_EPSILON,EMPTY_ADDRESS,REMOTE_API_HOST,
    BIKECOIN_OWNER_SHIP_PROTOCOL_ABI,
    TX_RELAY_ADDRESS,BIKECOIN_NETWORK_ADDRESS,BIKECOIN_OWNER_SHIP_ADDRESS,TX_RELAY_ABI, BIKECOIN_APIKEY,
    BIKECOIN_TOKEN_ABI, BIKECOIN_TOKEN_ADDRESS
};
