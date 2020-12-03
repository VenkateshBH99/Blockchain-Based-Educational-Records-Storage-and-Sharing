## Blockchain Based Educational Records Storage and Sharing
### Introduction:
For individuals, accurate and full educational records are a valuable asset. Educational documents have been digitised in recent years. There are still, however, two major problems that have not been overcome. One is to achieve reliable and privacy-preserving storage of educational records, while another is how to understand the sharing of educational records and ensure the protection of the process of sharing. In this paper , we propose a scheme for educational records based on blockchain storage and sharing, which incorporates blockchain, storage database and cryptography techniques to create a reliable and protected setting. The blockchain technology is used in our proposal to ensure the protection and reliability of data storage, while the blockchain's smart contracts are used to manage the storage and sharing method. The off-chain database stores the original educational records in encrypted form more specifically, while the records' hash information is stored on the blockchain. To ensure the protection of data storage, the off-chain records are regularly anchored with the hash data on the blockchain. Cryptography approaches are used to manage the encryption of documents and digital signature of messages. The system incorporates a WebApp based interface for the concerned parties involved in the transaction to communicate in an effective manner thereby providing a base for decentralized approach.
### Technology Stack:
* Blockchain
    * Ethereum, 
    * Web3, 
    * Solidity,
    * IPFS,
    * Truffle.
* Front End (Web DApp)
    * React JS, 
    * Bootstrap.
* Back End
    * NodeJS.
* Database
    * OrbitDB.
* Hosting Services
    * Heroku (React DApp),
    * Infura (Blockchain),
    * Metamask.
### SYSTEM DESIGN & ARCHITECTURE

![Working](/images/1.png)

#### The login-in interface for student and institute

![The login-in interface for student and institute](/images/5.png)

#### The student dashboard to apply for records

![The student dashboard to apply for records](/images/2.png)

####  Spending ether on transaction using Metamask

![ Spending ether on transaction using Metamask](/images/3.png)

#### Institute dashboard of requested documents.

![Institute dashboard of requested documents](/images/12.png)

#### Representative view of the verified document

![Representative view of the verified document](/images/10.png)

#### IPFS or Download view for the student after institute verification

![IPFS or Download view for the student after institute verification](/images/11.png)


### Instructions to run

- Use *npm install* to install dependencies
- Use *npm start* to start react-scripts
- Install Metamask and Ganache and create a free account
- Import Ganache into Metamask
- Visit *localhost:3000* to view the app running
