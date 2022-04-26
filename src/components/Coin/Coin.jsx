import React from "react";
import "./Coin.scss";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const Coin = ({ coin }) => {

  return (
    <tr className="coin-row">
      <td className="coin-rank">
        <p>{coin.market_cap_rank}</p>
      </td>
      <td className="coin-name">
        <img src={coin.image} alt="" />
        <p>{coin.name}</p>
        <span>{coin.symbol.toUpperCase()}</span>
      </td>
      <td className="coin-price">
        <p>${coin.current_price.toLocaleString("en-US", {
            maximumFractionDigits: 12,
          })}</p>
      </td>
      <td className="coin-24h">
        <div className={coin.price_change_percentage_24h < 0 ? 'red' : 'green' }>
          {coin.price_change_percentage_24h < 0 ? <VscTriangleDown /> : <VscTriangleUp />}
          <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        </div>
      </td>
      <td className="coin-market_cap">
        <p>
          $
          {coin.market_cap.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}
        </p>
        <span>
          {coin.circulating_supply.toLocaleString("en-US", {
            maximumFractionDigits: 0,
          })}{" "}
          {coin.symbol.toUpperCase()}
        </span>
      </td>
    </tr>
  );
};

export default Coin;
