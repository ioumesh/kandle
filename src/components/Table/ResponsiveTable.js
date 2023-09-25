import React from "react";

const ResponsiveTable = () => {
  const data = [
    {
      rank: 1,
      name: "Parteek Garg",
      amountWon: "USDT 1000",
      gamesPlayed: 2000,
      winRate: "85%",
      favoriteCoins: "Bitcoin",
      favoriteGame: "Coin League",
    },
    {
      rank: 1,
      name: "Parteek Garg",
      amountWon: "USDT 1000",
      gamesPlayed: 2000,
      winRate: "85%",
      favoriteCoins: "Bitcoin",
      favoriteGame: "Coin League",
    },
    {
      rank: 1,
      name: "Parteek Garg",
      amountWon: "USDT 1000",
      gamesPlayed: 2000,
      winRate: "85%",
      favoriteCoins: "Bitcoin",
      favoriteGame: "Coin League",
    },
    {
      rank: 1,
      name: "Parteek Garg",
      amountWon: "USDT 1000",
      gamesPlayed: 2000,
      winRate: "85%",
      favoriteCoins: "Bitcoin",
      favoriteGame: "Coin League",
    },
    {
      rank: 1,
      name: "Parteek Garg",
      amountWon: "USDT 1000",
      gamesPlayed: 2000,
      winRate: "85%",
      favoriteCoins: "Bitcoin",
      favoriteGame: "Coin League",
    },
    {
      rank: 1,
      name: "Parteek Garg",
      amountWon: "USDT 1000",
      gamesPlayed: 2000,
      winRate: "85%",
      favoriteCoins: "Bitcoin",
      favoriteGame: "Coin League",
    },
    {
      rank: 1,
      name: "Parteek Garg",
      amountWon: "USDT 1000",
      gamesPlayed: 2000,
      winRate: "85%",
      favoriteCoins: "Bitcoin",
      favoriteGame: "Coin League",
    },
    // Add more data as needed
  ];

  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Global Ranks</th>
            <th>Player Name</th>
            <th>Amount Won</th>
            <th>Games Played</th>
            <th>Win Rate</th>
            <th>Favorite Coins</th>
            <th>Favorite Game</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td data-label="Global Ranks">{row.rank}</td>
              <td data-label="Player Name">{row.name}</td>
              <td data-label="Amount Won">{row.amountWon}</td>
              <td data-label="Games Played">{row.gamesPlayed}</td>
              <td data-label="Win Rate">{row.winRate}</td>
              <td data-label="Favorite Coins">{row.favoriteCoins}</td>
              <td data-label="Favorite Game">{row.favoriteGame}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
