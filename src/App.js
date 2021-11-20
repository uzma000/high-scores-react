import React from "react";
import "./App.css";
import AllCountryScores from "./Scores";
import ScoresTable from "./ScoresTable";

function App() {
  return (
    <div className="App">
      <h1>High Scores</h1>
      {AllCountryScores.map((CountryName, index) => {
        return <ScoresTable key={index} value={CountryName} />;
      })}
    </div>
  );
}

export default App;
