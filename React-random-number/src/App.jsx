import React, { useState } from "react";
import "./App.css";

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(randomNum);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Random Number Generator</h1>
        <div className="range-inputs">
          <div>
            <label>Min:</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Max:</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
            />
          </div>
        </div>
        <button onClick={generateRandomNumber}>Generate Random Number</button>
        {number !== null && <p className="number">{number}</p>}
      </div>
      <footer>
        <p>
          <a href="https://github.com/urstruelysv/React-simple-apps">
            GitHub Repository
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
