import React from 'react';
import {Link} from 'react-router-dom'

const ViewEducation = (props) =>
{
    var {recordId} = props;
    var url = "/";
    return (

        <nav className="nav-wrapper grey darken-4 navbar">
            <div className="container">
                <b><a href="/" className="brand-logo">Records</a></b>
                <ul className = "right">
                <li><a href="/Institute">Home</a></li>
                <li> <a href={url}> Logout </a></li>
                </ul>
                </div>
        </nav>

    )

}


export default ViewEducation;
