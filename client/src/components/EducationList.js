import React, { Component } from 'react';
import ViewRecord from './ViewRecord';
import {Link} from 'react-router';
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../utils/getWeb3";

import '../CSS/StudentList.css';

class EducationList extends Component{

    state = {
        details : [],
        getDetailsOf: null
    }

    componentDidMount () {

    }

    componentDidMount = async () => {
        try {
          // Get network provider and web3 instance.
          const web3 = await getWeb3();

          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();

          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = SimpleStorageContract.networks[networkId];
          const instance = new web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address,
          );
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ web3, accounts, contract: instance }, this.runExample);
          this.getVal();


        //   // bootstrap links
        // const script1 = document.createElement("script");
        // const script2 = document.createElement("script");
        // const script3 = document.createElement("script");

        // const link = document.createElement("link");

        // script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
        // script2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
        // script3.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
        // link.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";

        // script1.async = true;
        // script2.async = true;
        // script3.async = true;
        // link.async = true;

        // document.body.appendChild(script1);
        // document.body.appendChild(script2);
        // document.body.appendChild(script3);
        // document.body.appendChild(link);

        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      };

      getVal= async () =>{
        const { accounts, contract } = this.state;
                var response2 = await contract.methods.getAllrecordDetails(accounts[0]).call();
                this.setState({
                    details: response2
                });
                console.log(this.state.details);
      };

    render() {
        var arr = [];
        var details = this.state.details;
        for (var key in details) {
            arr.push(details[key]);
        }

        const records = arr.length ?
        (
            arr.map(arr =>
            {
              console.log(arr);
              if(arr.record_id!=0)
              {
                var toLink = "/educationUpdate/"+arr.record_id;
            return (


                <div className = "card" key = {arr.record_id}>
                <div className="row listItem" >
                        <div className="col s3 black-text">
                            <h6>{arr.record_id}</h6>
                        </div>
                        <div className="col s3 black-text ">
                            <h6>{arr.record_code}</h6>
                        </div>

                        <div className="col s3 black-text ">
                            <h6>{arr.description}</h6>
                        </div>
                        <div className="col s3 black-text ">
                            <h6>{arr.timestamp}</h6>
                        </div>

                    </div>
                        <a href={toLink}> <button type="button" className="dropbtn1" > Add</button></a>
                </div>

                )
              }
            })
        ):
        (
                <div className="error">
                    <h3>No Records!</h3>
                </div>
        )

         return(
            <div className="notes">
                {records}
             </div>
         )
    }
    clicked = (clicked) =>
    {
        this.setState({
            getDetailsOf : clicked
        })

    }
}

export default EducationList;
