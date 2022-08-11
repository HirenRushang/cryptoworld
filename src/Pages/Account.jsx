import React from 'react'
import SavedCoin from '../components/SavedCoin/SavedCoin'
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import "../components/SavedCoin/SavedCoin.css"

const Account = () => {

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  if(user){
    return (
      <div className='container-fluid account_wrapper_outer'>
        <div className='container'>
        <div className='account_wrapper'>
        <div className='account_section'>
          <div className='row'>
            <div className='col-xx-12 account_column'>
              <div className='account_left_part'>
                <p>Account</p>
                <p>Welcome <span>{user?.email}</span></p>
              </div>
              <div className='account_right_part'>
                <button onClick={handleSignOut}>Sign Out</button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className='row watchlist_wrapper'>
            <div className='col-xxl-12'>
              <h1>Watch List</h1>
              <SavedCoin />
            </div>
          </div>
        </div>
  
      </div>
        </div>
      </div>
      
    )
  }else {
    return <Navigate to="/signin" />
  }
 
}

export default Account