/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function LoginPage() {
    
     const[values, setValues] = useState({
         email : '',
         password : '',
     });
     const [passwordShown, setPasswordShown] = useState(false);
     // eslint-disable-next-line no-unused-vars
     const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? 'show' : 'hide');
  };

  const handleEmailInput= (event) => {
      event.persist();
      setValues((values)=> ({...values, email: event.target.value}))
  };
  const handlePasswordInput = (event) => {
      event.persist();
      setValues((values)=> ({...values, password: event.target.value}))
  };
const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{&}~-]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/
    );
const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
    setSubmitted(true);
    }
    return (
        <div className="login-page">
        <form onSubmit={handleSubmit}>
            <div>
                <h3 className="login-page-header">Log in to your account</h3>
            </div>
            <div>
                <input type="text" name="email" placeholder="Email Address" value={values.email} onChange={handleEmailInput} />
            </div>
            <div className="password-container" >
                <input type={passwordShown ? "text" : "password"} name="password" placeholder="Enter Password" value={values.password} onChange={handlePasswordInput} />
                <span className="password-span" onClick={()=> setPasswordShown(passwordShown => !passwordShown)}>{passwordShown? 'hide': 'show'}</span>
            </div>
            <div>
                {submitted && emailRegex.test(values.email) && values.password.length===6 ? 
                <Link to="/welcomepage">
                <button className="login-page-button" type="submit">Log me in</button>
            </Link> : <button className="login-page-button" type="submit">Log me in</button>
}
            </div>
            <div>
                <p>Forgot your password?
                    <a href='#' className="reset-password"> Reset it here</a>
                    </p>
            </div>
            
        </form>
        </div>
    )
    }

export default LoginPage;
