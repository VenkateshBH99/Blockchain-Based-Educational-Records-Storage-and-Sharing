import React, { Component } from 'react';
import RecordDetailsNav from './Navbar/ViewEducation.js'
import RecordPhoto from './RecordPhoto';

import EducationContract from "../contracts/EducationContract.json";
import getWeb3 from "../utils/getWeb3";

import ipfs from '../ipfs';

class RecordDetails extends Component {
    state = {
        ipfsHash: '',
        buffer: null,
        web3: null,
        accounts: null,
        contract: null,
        record_id: '',
        address: '',
        record_name: '',
        desc: '',
        timestamp: ''
    };

    captureFile = (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
            this.setState({ buffer: Buffer(reader.result) })
            console.log('buffer', this.state.buffer)
        }
    }

    onSubmit = async (event) => {
        event.preventDefault()
        const { accounts, contract, buffer, record_id, address, record_name, desc, timestamp } = this.state;
        if (!buffer || !record_id || !address || !record_name || !desc || !timestamp) {
            alert("Please fill in all fields and select a file.");
            return;
        }

        try {
            const ipfsResult = await ipfs.files.add(buffer);
            await contract.methods.addReport(record_id, address, record_name, desc, timestamp, ipfsResult[0].hash).send({ from: accounts[0] });
        } catch (error) {
            console.error(error);
            alert("Failed to upload report to blockchain. Check console for details.");
        }
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
    
            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.setState({ web3, accounts, contract: instance }, this.runExample);
            this.onGetDate();
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    };
    

    onGetDate = () => {
        const date = new Date();
        const timestamp = date.toLocaleString();
        this.setState({ timestamp });
    }

    render() {
        return (
            <div>
                <RecordDetailsNav recordId={this.props.routeParams.recordId} />
                <h4 className="title-styled" style={{ marginTop: "40px", marginLeft: "235px", marginBottom: "25px" }}>Upload Education Reports</h4>
                <div className="container">
                    <form onSubmit={this.onSubmit} id="donateForm" className="donate-form">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group required">
                                    <label htmlFor="report_type">Institute ID</label>
                                    <input className="form-control" type="text" id="record_id" name="record_id" placeholder="Enter record id" onChange={(evt) => { this.setState({ record_id: evt.target.value }); }} required />
                                </div>
                            </div>
                            {/* Repeat similar blocks for other form fields */}
                        </div>
                        <div className="row">
                            <div className="form-submit">
                                <button type="submit" className="dropbtn1" style={{ marginTop: "10px" }}>Upload to Blockchain</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RecordDetails;
