import React, { useState } from "react";
import { Form } from "react-bootstrap";
import CoinItem from "./CoinItem";
import "./CoinSearch.css";

const CoinSearch = ({ coin }) => {
  const [searchtext, setSearchText] = useState("");

  return (
    <div className="container-fluid coinlist_wrapper">
      <div className="container coinlist_section">
        <div className="searchbar">
          <div>
            <h1>Search Crpyto</h1>
          </div>
          <div>
           
            <Form>
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                placeholder="Search a Coin"
              />
            </Form>
          </div>
        </div>

        <div className="table_container">
          <table>
            <thead>
              <tr>
                <th className="one"></th>
                <th className="two">#</th>
                <th className="coin_table_title">Coin</th>
                <th className="coin_table_name">Name</th>
                <th className="coin_table_price">Price</th>
                <th className="coin_twentyfour_hour">24h</th>
                <th className="coin_twentyfour_volume">24h Volume</th>
                <th className="coin_market">Mkt</th>
                <th className="coin_lastseven_day">Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {coin
                .filter((value) => {
                  if (searchtext === "") {
                    return value;
                  } else if (
                    value.name
                      .toLowerCase()
                      .includes(searchtext.toLocaleLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((c,  index) => (
                  <CoinItem c={c} key={index} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoinSearch;
