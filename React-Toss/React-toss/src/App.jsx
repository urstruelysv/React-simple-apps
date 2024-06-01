import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("Heads");
  const [isAnimating, setIsAnimating] = useState(false);

  function tossCoin() {
    setIsAnimating(true);
    setTimeout(() => {
      const outcomes = ["Heads", "Tails"];
      const randomOutcome =
        outcomes[Math.floor(Math.random() * outcomes.length)];
      setResult(randomOutcome);
      setIsAnimating(false);
    }, 1000);
  }

  return (
    <div className="app">
      <h1>Coin Toss</h1>
      <div className={`coin ${isAnimating ? "animate" : ""}`}>{result}</div>
      {"  "}
      <button onClick={tossCoin}>Toss Coin</button>
      <footer>
        {" "}
        simple app created by Urstruelysv{" "}
        <a
          href="https://github.com/urstruelysv"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          view on github{" "}
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
