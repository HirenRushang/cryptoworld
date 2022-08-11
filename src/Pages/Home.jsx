import React from 'react'
import CoinSearch from '../components/CoinSearch/CoinSearch'
import Trending from '../components/Trending/Trending'

const Home = ({coin}) => {
  return (
    <div>
      <CoinSearch coin={coin}/>

      <Trending />
    </div>
  )
}

export default Home