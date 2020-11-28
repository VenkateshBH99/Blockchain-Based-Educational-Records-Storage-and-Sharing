import React, { Component } from 'react';
import '../CSS/StudentHome.css';
import RecordList from './RecordList';


class StudentHome extends Component {
    render() {
        return(
            <div>
            <nav className="nav-wrapper grey darken-4 navbar">
            <div className="container">
            <b><a href="/" className="brand-logo">Records</a></b>
               <ul className = "right">
                   <li active><a href = "/student">Home</a></li>
                   <li><a href = "/newRecord">Request Record</a></li>
                   <li><a href = "/">Log out</a></li>
               </ul>
            </div>

        </nav>
        <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"10px"}}>List of records</h4>
            <div className = "container homeList center">
                <div className="card blue darken-3 headers">
                    <div className="row ">
                        <div className="col s3 white-text  ">
                            <h6>Institute ID</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Record Name</h6>
                        </div>

                        <div className="col s3 white-text ">
                            <h6>Description</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Created Timestamp</h6>
                        </div>
                    </div>
                </div>
                <RecordList/>
            </div>
            </div>
        )
    }
}

export default StudentHome;
