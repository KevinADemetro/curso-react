import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handlerCountMinus() {
    setCount((c) => c - step);
  }

  function handlerCountPlus() {
    setCount((c) => c + step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleChangeStep(e) {
    setStep(Number(e.target.value));
  }

  function handleChangeCount(e) {
    setCount(Number(e.target.value));
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => handleChangeStep(e)}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handlerCountMinus}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => handleChangeCount(e)}
        />
        <button onClick={handlerCountPlus}>+</button>
      </div>
      <p>
        {count} days from today is {date.toDateString()}
      </p>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
