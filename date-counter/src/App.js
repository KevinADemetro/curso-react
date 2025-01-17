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

  function handlerStepMinus() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handlerStepPlus() {
    setStep((s) => s + 1);
  }

  function handlerCountMinus() {
    setCount((c) => c - step);
  }

  function handlerCountPlus() {
    setCount((c) => c + step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={handlerStepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handlerStepPlus}>+</button>
      </div>
      <div>
        <button onClick={handlerCountMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={handlerCountPlus}>+</button>
      </div>
      <p>
        {count} days from today is {date.toDateString()}
      </p>
    </>
  );
}
