import React, { Component } from 'react';
import ViewRecord from './ViewRecord';
import { Link } from 'react-router';
import EducationContract from "../contracts/EducationContract.json";
import getWeb3 from "../utils/getWeb3";

import '../CSS/StudentList.css';

class RecordList extends Component {
    state = {
        details: [],
        getDetailsOf: null,
        web3: null,
        accounts: null,
        contract: null
    }

    componentDidMount = async () => {
        try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = EducationContract.networks[networkId];
            const instance = new web3.eth.Contract(
                EducationContract.abi,
                deployedNetwork && deployedNetwork.address,
            );

            // Set web3, accounts, and contract to the state.
            this.setState({ web3, accounts, contract: instance });

            // Fetch initial data
            this.getVal();
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    };

    getVal = async () => {
        try {
            const { accounts, contract } = this.state;
            const response2 = await contract.methods.getAllrecordDetails(accounts[0]).call();
            this.setState({ details: response2 });
            console.log(this.state.details);
        } catch (error) {
            console.error("Failed to fetch record details:", error);
        }
    };

    render() {
        const { details } = this.state;

        const records = details.length ? (
            details.map(arr => {
                if (arr.record_id !== 0) {
                    const toLink = `http://127.0.0.1:5001/ipfs/bafybeianwe4vy7sprht5sm3hshvxjeqhwcmvbzq73u55sdhqngmohkjgs4/#/explore/${arr.ipfsHash}`;
                    const download = `http://localhost:8080/ipfs/${arr.ipfsHash}`;
                    return (
                        <div className="card" key={arr.record_id}>
                            <div className="row listItem">
                                <div className="col s3 black-text">
                                    <h6>{arr.record_id}</h6>
                                </div>
                                <div className="col s3 black-text ">
                                    <h6>{arr.record_name}</h6>
                                </div>
                                <div className="col s3 black-text ">
                                    <h6>{arr.description}</h6>
                                </div>
                                <div className="col s3 black-text ">
                                    <h6>{arr.timestamp}</h6>
                                </div>
                            </div>
                            <a href={toLink}><button type="button" className="dropbtn1">IPFS</button></a>
                            <a href={download}><button type="button" className="dropbtn1">Download</button></a>
                        </div>
                    );
                }
            })
        ) : (
            <div className="error">
                <h3>No records!</h3>
            </div>
        );

        return (
            <div className="notes">
                {records}
            </div>
        );
    }

    clicked = (clicked) => {
        this.setState({ getDetailsOf: clicked });
    }
}

export default RecordList;
