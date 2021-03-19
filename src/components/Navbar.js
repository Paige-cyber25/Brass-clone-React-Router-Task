/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ()=> {
const location = useLocation();
    return (
        <div className="navbar">
            <div>
                <Link to="/">
                <img className="img1" src="/brass-logo.png" alt="" /> 
                </Link>
            </div>
           <Link to="/login">
               {location.pathname === '/login' ? (
            <div className="text-header1">
                <a href="">Open an account</a>
            </div>
            ) : (
                <button type="button" className="button1">Login</button>
               )}
            </Link>
        </div>
    )
}

export default Navbar;
