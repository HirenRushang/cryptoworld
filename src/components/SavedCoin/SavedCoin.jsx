import React, {useState, useEffect} from 'react'
import "./SavedCoin.css"
import {Link} from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"
import {db} from "../../Firebase"
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { UserAuth } from '../../context/AuthContext'


const SavedCoin = () => {
const[coins,setcoins] = useState([])

const { user } = UserAuth();

useEffect(() => {
  onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
    setcoins(doc.data()?.watchList);
  });
}, [user?.email]);

const coinPath = doc(db, 'users', `${user?.email}`);
const deleteCoin = async (passedid) => {
  try {
    const result = coins.filter((item) => item.id !== passedid);
    await updateDoc(coinPath, {
      watchList: result,
    });
  } catch (e) {
    console.log(e.message);
  }
};

  return (
     <div className='savedcoin_wrapper'>
        <div className='savedcoin_section'>
            {coins.length === 0 ? (<p>You don't have any coins saved Please save a coin to add it your watch list. <Link to="/">Click heare to search coins</Link></p>):(
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Coin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((c)=>(
                            <tr key={c.id}>
                                <td>{c?.rank}</td>
                                <td>
                                    <Link to={`/coin/${c.id}`}>
                                       <div className='watchlist_item_img'>
                                          <img src={c?.image} alt="" />
                                          <div>
                                            <p className='watchlist_coin_name'>{c?.name}</p>
                                            <p className='watchlist_coin_symbol'>{c?.symbol.toUpperCase()}</p>
                                          </div>
                                       </div>
                                    </Link>
                                </td>
                                <td>
                                    <AiOutlineClose onClick={() => deleteCoin(c.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
     </div>
  )
}

export default SavedCoin