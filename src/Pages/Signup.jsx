import React,{useState} from 'react'
import "./Signin.css"
import { Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signUp } = UserAuth();
 

   const handlesignup = async()=>{
    setError('')
    try {
      await signUp(email,password)
      navigate("/account")
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
   }

  return (

    <div className='container-fluid signin_wrapper_outer'>
      <div className='container'>
      <div className="singin_wrapper container-fluid">
    <div className="signin_section container">
      <div className="row">
        <div className="col-xxl-12">
          <div className="title">
            <p>Sign up</p>
          </div>
          <div className="email_box">
            <input onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
          </div>
          <div className="password_box">
            <input  type='password' onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
          </div>
          <div className="sign_in_btn">
            <button onClick={handlesignup}>Sign up</button>
          </div>
          <div className="sign_up_link">
            <p>Already have an account? <Link to="/signin">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
   
  )
}

export default Signup