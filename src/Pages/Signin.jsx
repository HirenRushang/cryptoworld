import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import {signIn, UserAuth } from '../context/AuthContext'

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handlesignin = async()=>{
    setError('')
    try {
      await signIn(email,password)
      navigate("/account")
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
   }

  return (

    <div className="container-fluid signin_wrapper_outer">
      <div className="container">
      <div className="singin_wrapper">
      <div className="signin_section">
        <div className="row">
          <div className="col-xxl-12">
            <div className="title">
              <p>Sign in</p>
            </div>
            <div className="email_box">
              <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="password_box">
              <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="sign_in_btn">
              <button onClick={handlesignin}>Sign In</button>
            </div>
            <div className="sign_up_link">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    
  );
};

export default Signin;
