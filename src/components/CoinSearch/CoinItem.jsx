import React, { useState } from 'react'
import {AiOutlineStar, AiFillStar} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import "./CoinSearch.css";
import { UserAuth } from '../../context/AuthContext';
import {db} from "../../Firebase"
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';


const CoinItem = ({c}) => {

  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();

  const coinPath = doc(db, 'users', `${user?.email}`);
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: c.id,
          name: c.name,
          image: c.image,
          rank: c.market_cap_rank,
          symbol: c.symbol,
        }),
      });
    } else {
      alert('Please sign in to save a coin to your watch list');
    }
  };

     
  

  return (
    <tr key={c.id}>
    <td onClick={saveCoin}>
        {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
      </td>
    <td>{c.market_cap_rank}</td>
    <td>
      <Link to={`/coin/${c.id}`}>
      <div className='table_third_cell'>
        <img src={c.image} alt={c.id} />
        <p>{c.name}</p>
      </div>
      </Link>
    </td>
    <td className='data_symbol'>{c.symbol.toUpperCase()}</td>
    <td>${c.current_price.toLocaleString()}</td>
    <td className='data_pricechange_twentyfourhour'>{ c.price_change_24h > 0 ? (<p className='textgreen'>{c.price_change_24h.toFixed(2)}%</p>): (<p className='textred'>{c.price_change_24h.toFixed(2)}%</p>)}
     
      </td>
    <td className='data_volume'>${c.total_volume.toLocaleString()}</td>
    <td className='data_market_cap'>${c.market_cap.toLocaleString()}</td>
    <td className='data_sparkline'>
      <Sparklines data={c.sparkline_in_7d.price}>
          <SparklinesLine color='teal' />
      </Sparklines>
      </td>
  </tr>
  )
}

export default CoinItem