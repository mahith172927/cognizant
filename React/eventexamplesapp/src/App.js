import React, { useState } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {

  const [count, setCount] = useState(5);

  // Method 1
  const increment = () => {
    setCount(count + 1);
  };

  // Method 2
  const sayHello = () => {
    alert("Hello! Member!");
  };

  // Invoke multiple methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">

      <h2>{count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <br /><br />

      <button onClick={decrement}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>
        Click on me
      </button>

      <br /><br />

      <CurrencyConvertor />

    </div>
  );
}

export default App;