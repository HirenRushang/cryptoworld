import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Trending.css";
import { useInView } from 'react-intersection-observer';




const Trending = () => {
  const [trending, setTrending] = useState([]);
  const { ref:myRef, inView:myelement } = useInView({
    triggerOnce:true,
  });


 

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
     
    });
  }, [url]);



  return (
    <div className="trending_wrapper container-fluid">
        <div className="trending_section container">
      <div className="title">
        <h1>Trending Coins</h1>
      </div>
      <div  className="trending_coin_card">
        {trending.map((c, index) => {
          return (
            <div ref={myRef} key={index} className={`${"cardd"} ${myelement ? "cardanimation" : ""}`}>
              <div className="cardd_img">
                <img src={c.item.small} alt="" />
              </div>
              <div className="cardd_title">
                <p>{c.item.name}</p>
                <p>{c.item.symbol}</p>
              </div>
              <div className="cardd_compare_to_btn">
                <img
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt=""
                />
                <p>{c.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Trending;
