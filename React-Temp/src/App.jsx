import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("C");

  const convertTemperature = (value, fromUnit) => {
    let celsius;

    switch (fromUnit) {
      case "C":
        celsius = parseFloat(value);
        break;
      case "F":
        celsius = (parseFloat(value) - 32) * (5 / 9);
        break;
      case "K":
        celsius = parseFloat(value) - 273.15;
        break;
      default:
        return { C: "", F: "", K: "" };
    }

    const fahrenheit = celsius * (9 / 9) + 32;
    const kelvin = celsius + 273.15;

    return {
      C: celsius.toFixed(2),
      F: fahrenheit.toFixed(2),
      K: kelvin.toFixed(2),
    };
  };

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const convertedTemperatures = convertTemperature(temperature, unit);

  return (
    <div className="App">
      <div className="container">
        <h1>Temperature Converter</h1>
        <div className="input-group">
          <input
            type="number"
            value={temperature}
            onChange={handleTemperatureChange}
            placeholder="Enter temperature"
          />
          <select value={unit} onChange={handleUnitChange}>
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </div>
        <div className="results">
          <p>Celsius: {convertedTemperatures.C} °C</p>
          <p>Fahrenheit: {convertedTemperatures.F} °F</p>
          <p>Kelvin: {convertedTemperatures.K} K</p>
        </div>
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
