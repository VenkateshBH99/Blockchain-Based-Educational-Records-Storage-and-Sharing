import React, { Component } from 'react'
import EducationList from './EducationList.js'

class EducationHome extends Component
{
    render(){
        return(
            <div>
                <nav className="nav-wrapper grey darken-4 navbar">
                    <div className="container">
                        <b><a href="/" className="brand-logo">Records</a></b>
                        <ul className = "right">
                            <li active><a href = "/Institute">Home</a></li>
                            <li><a href = "/">Log out</a></li>
                        </ul>
                    </div>
                </nav>
                <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"10px"}}>List of Record Requests</h4>
                <div className = "container homeList center">
                <div className="card blue darken-3 headers">
                    <div className="row ">
                        <div className="col s3 white-text  ">
                            <h6>Student ID</h6>
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
                <EducationList/>
            </div>
            </div>
        )
    }
}

export default EducationHome;
