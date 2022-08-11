


import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './context/Context';
import Home from './Pages/Home';
import Account from "./Pages/Account"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"

import axios from 'axios';
import CoinPage from './Pages/CoinPage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';


function App() {

 const{theme} = useContext(ThemeContext)

 const[coin,setCoin] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true"


  useEffect(()=>{
     axios.get(url).then((response)=>{
        setCoin(response.data)
        // console.log(response.data)
     })
  },[url])

  return (
  
      <div id={theme} >
    
    <Navigation />
    
    <Routes>
     <Route path='/' element={<Home coin={coin}/>} />
     <Route path='/account' element={<Account/>} />
     <Route path='/signin' element={<Signin/>} />
     <Route path='/signup' element={<Signup/>} />
     <Route path="/coin/:coinId" element={<CoinPage />}>
        {/* <Route path=':coinId' /> */}
     </Route>
    </Routes>
   
    <Footer />
    </div>
   
   
  );
}

export default App;
