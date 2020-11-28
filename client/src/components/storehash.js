import web3 from "../utils/web3";

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0x14d3c785b5251d1c01708f9b7872311aa8771b9c';
//use the ABI from your contract
const abi = [
  {


            "constant": true,
            "inputs": [],
            "name": "getHash",
            "outputs": [
                {
                    "name": "x",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "x",
                    "type": "string"
                }
            ],
            "name": "sendHash",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"


  }
]
export default new web3.eth.Contract(abi, address);
