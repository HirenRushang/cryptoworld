import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import DOMPurify from 'dompurify'
import "./CoinPage.css"
import {useParams} from "react-router-dom"

const CoinPage = () => {
  const [coin, setcoin] = useState({});

  const params = useParams()
  const extractid = params.coinId

  const url =
    `https://api.coingecko.com/api/v3/coins/${extractid}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setcoin(response.data);
      
    });
  }, [url]);

  return (
   
    <div className="coinpage_wrapper container-fluid">
      <div className="coinpage_section container">
        <div className="coinpage_title">
          <div>
            <img src={coin.image?.large} alt="" />
          </div>
          <div className="coin_title_detail">
            
            <p className="coin_name">{coin?.name} Price</p>
            <p>({coin.symbol?.toUpperCase()} / USD)</p>
          </div>
        </div>
        <div className="coinpage_statetics">
          <div className="coinpage_left_part">
            <div className="coinpage_price_and_day_title">
              {coin.market_data?.current_price ? (
                <p className="price_title">${coin.market_data.current_price.usd.toLocaleString()}</p>
              ) : null}
              <p>7 Day</p>
            </div>
            <div className="coin_chart">
              <Sparklines data={coin.market_data?.sparkline_7d.price}>
                <SparklinesLine color="teal" />
              </Sparklines>
            </div>
            <div className="coin_market_volume">
               <div className="market_cap">
                  <p className="marketcap_title">MarketCap</p>
                  {coin.market_data?.market_cap ? (<p>${coin.market_data.market_cap.usd.toLocaleString()}</p>):(null)}
               </div>
               <div className="volume">
                <p className="volumeup_title">Volume</p>
                {coin.market_data?.market_cap ? (<p>${coin.market_data.total_volume.usd.toLocaleString()}</p>):(null)}
               </div>
            </div>
            <div className="coin_high_low">
              <div className="coin_high">
                <p className="high_title">24 High</p>
                {coin?.market_data ? (<p>${coin.market_data.high_24h.usd.toLocaleString()}</p>):(null)}
              </div>
              <div className="coin_low">
                <p className="low_title">24 Low</p>
                {coin?.market_data ? (<p>${coin.market_data.low_24h.usd.toLocaleString()}</p>):(null)}
              </div>
            </div>
            
          </div>
          <div className="coinpage_right_part">
            <div className="right_part_title">
              <p>Market State</p>
            </div>
            <div className="right_part_first_row">
              <div className="market_rank">
                <p>Market Rank</p>
                <p>{coin.market_cap_rank}</p>
              </div>
              <div className="hasing_algo">
                <p>Hashing Algo</p>
                {coin.hashing_algorithm ? (<p>{coin.hashing_algorithm}</p>):(<p>NA</p>)}
              </div>
              <div className="trust_score">
                <p>Trust Score</p>
                 {coin.tickers ? (<p>{coin.liquidity_score.toFixed(2)}</p>): (<p>NA</p>)}
              </div>
            </div>
            <div  className="right_part_sec_row">
              <div className="twenty_four">
                <p>Price Change(24h)</p>
                 {coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>):(null)}
              </div>
              <div className="seven">
                <p>Price Change(7d)</p>
                {coin.market_data ? (<p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>):(null)}
              </div>
              <div className="fourteen">
                <p>Price Change(14d)</p>
                {coin.market_data ? (<p>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>):(null)}
              </div>
            </div>
            <div className="right_part_third_row">
              <div className="thirty">
                <p>Price Change(30d)</p>
                {coin.market_data ? (<p>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>):(null)}
              </div>
              <div className="sixty">
              <p>Price Change(60d)</p>
              {coin.market_data ? (<p>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>):(null)}
              </div>
              <div className="one_year">
                <p>Price Change(1y)</p>
                {coin.market_data ? (<p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>):(null)}
              </div>
            </div>
          </div>
        </div>
        <div className="coinpage_about">
          <p>About {coin.name}</p>
          <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}} ></p>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
