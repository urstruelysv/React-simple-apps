import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);

  const handleCalculation = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res = null;

    switch (operation) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        res = number1 / number2;
        break;
      default:
        break;
    }

    setResult(res);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Simple Calculator</h1>
        <div className="inputs">
          <input
            type="number"
            placeholder="Number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input
            type="number"
            placeholder="Number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <button onClick={handleCalculation}>Calculate</button>
        {result !== null && <p className="result">Result: {result}</p>}
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
