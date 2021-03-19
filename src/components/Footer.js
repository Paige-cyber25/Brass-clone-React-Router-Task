import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

function Footer() {
     const history = useHistory();
    return (
        <footer className="footer-container">
           <div>
               <h5>Bank better</h5>
               <h1>
                   Made for business
                   <br />
                   current account.
               </h1>
               <p>Powerful yet simple. Great human support.
                   <br />
                   Open an account in <strong>10 minutes!</strong>
               </p>
            </div> 
            <button type="button" className="button1" onClick={()=> history.push('/login')}>Login</button>
            <div className="logo-paragraph-container">
                 <p className="logo-paragraph">
                     <span ><img src="/footer-logo.png" alt="" className="logo"/></span> If you need any help, call +234-1-700-1760 </p>
            </div>
            <div>
                <img src="/footerImage.png" alt="" className="footer-image"/>
            </div>
        </footer>
    )
}

export default Footer
