import React from 'react';
import {Link} from 'react-router-dom'

const Nav = (props) =>
{
    return (
        <nav className="nav-wrapper grey darken-4 navbar">
        <div className="container">
            <b><a href="/" className="brand-logo">Records </a></b>
               <ul className = "right">
                   <li>
                       <a href="about">About</a>
                   </li>
                   <li>
                    <a href="contact">Contact Us</a>
                   </li>
               </ul>
            </div>

        </nav>

    )

}


export default Nav;
