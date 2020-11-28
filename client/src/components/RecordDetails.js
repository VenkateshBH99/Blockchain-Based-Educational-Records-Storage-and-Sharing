import React, { Component } from 'react';
import RecordDetailsNav from './Navbar/ViewEducation.js'
import RecordPhoto from './RecordPhoto';

import EducationContract from "../contracts/EducationContract.json";
import getWeb3 from "../utils/getWeb3";

import ipfs from '../ipfs';

class RecordDetails extends Component
{
    state = {ipfsHash: '', buffer: null, web3: null, accounts: null, contract: null,
               record_id: '',
               address:'',
               record_name: '',
               desc:'',
               timestamp:''
      };

      constructor(props)
      {
        super(props);
        this.captureFile = this.captureFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
          console.log(deployedNetwork.address);
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

        captureFile(event) {
            event.preventDefault()
            const file = event.target.files[0]
            const reader = new window.FileReader()
            reader.readAsArrayBuffer(file)
            reader.onloadend = () => {
              this.setState({ buffer: Buffer(reader.result) })
              console.log('buffer', this.state.buffer)
            }
          }

          onSubmit(event) {
            const { accounts, contract } = this.state;
            event.preventDefault()
            ipfs.files.add(this.state.buffer, (error, result) => {
            if(error)
            {
                console.error(error)
                return
            }
            console.log(this.state);
            contract.methods.addReport(this.state.record_id,this.state.address, this.state.record_name, this.state.desc, this.state.timestamp, result[0].hash).send({ from: accounts[0] });

            })
          }

         getVal = async () => {
            const { accounts, contract } = this.state;

            // Get the value from the contract to prove it worked.
            const response = await contract.methods.get().call();

            // Update state with the result.
            this.setState({ ipfsHash: response });

             console.log("ipfsHash: " + this.state.ipfsHash);
          };

         getImg = async () => {
            const { accounts, contract } = this.state;

            // Get the value from the contract to prove it worked.
            const response = await contract.methods.get().call();

            // Update state with the result.
            this.setState({ ipfsHash: response });

            var url = "https://ipfs.io/ipfs/"+this.state.ipfsHash;

            window.location = url;
          };

    onGetDate() {
        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        var hour = (date.getHours() + 100).toString().substring(1);
        var mins = (date.getMinutes() + 100).toString().substring(1);
        var sec = (date.getSeconds() + 100).toString().substring(1);
        this.setState({
            timestamp : year + "-" + month + "-" + day + " " + hour + ":" + mins + ":" + sec
        });
        // console.log(year + "-" + month + "-" + day + " " + hour + ":" + mins + ":" + sec);
      }
    render()
    {

        var recordId = this.props.routeParams.recordId;
        console.log(this.props);
        return(
            <div>
            <RecordDetailsNav recordId = {recordId}/>
            <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"25px"}}>Upload Education Reports</h4>
            <div className="container">
            <form onSubmit={this.onSubmit} id="donateForm" className="donate-form">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group required">
                            <label for="report_type">Institute ID</label>
                            <input className="form-control"  type="text" id="record_id" name="record_id" placeholder="Enter record id" onChange={(evt) => { this.state.record_id = evt.target.value ; }} required />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group required">
                            <label for="report_type">Student Address Key</label>
                            <input className="form-control"  type="text" id="address" name="address" placeholder="Enter Student Address key" onChange={(evt) => { this.state.address = evt.target.value ; }} required />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group required">
                            <label for="company">Record NAME </label>
                            <input className="form-control" type="text" id="record_name" name="record_name" placeholder="Type record name." onChange={(evt) => { this.state.record_name =  evt.target.value; }} required />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group required">
                            <label for="par_rem">DESCRIPTION</label>
                            <input className="form-control" type="text" id="desc" name="desc" placeholder="One line description" onChange={(evt) => { this.state.desc =  evt.target.value; }} required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group required">
                            <label for="payment">Documents (upload in .zip or .rar format)</label>
                            <input className="form-control" type="file" accept="application/zip,application/x-zip,application/x-zip-compressed,application/octet-stream" onChange={this.captureFile}/>
                         </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group required">
                            <label for="fee">TIMESTAMP</label>
                            <input value={this.state.timestamp} className="form-control" readOnly type="text" id="timestamp" name="timestamp" onChange={(evt) => { this.state.timestamp =  evt.target.value; }} placeholder="2019-08-03 20:45" required />
                        </div>
                    </div>
                    <div className="form-submit">
                        <button type="submit" className="dropbtn1" style={{marginTop:"10px"}}>Upload to Blockchain</button>
                    </div>
                </div>
            </form>
            </div>
            </div>
        )

    }
}

export default RecordDetails;
