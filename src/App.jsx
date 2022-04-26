import "./App.scss";
import { useState, useEffect } from "react";
import Coin from "./components/Coin/Coin";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const searchedCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <div className="coins">
        <div className="filter">
          <label htmlFor="search">Filtrer  :</label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="coins-table">
          <thead>
            <tr>
              <td>#</td>
              <td>Nom</td>
              <td>Cours</td>
              <td>Dernières 24h</td>
              <td>Capitalisation totale</td>
            </tr>
          </thead>
          <tbody>
            {searchedCoins.slice(0, 10).map((coin) => {
              return <Coin coin={coin} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
