import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((Number(percentage1) + Number(percentage2)) / 2 / 100);

  function handleSetPercentage1(e) {
    setPercentage1(e.target.value);
  }

  function handleSetPercentage2(e) {
    setPercentage2(e.target.value);
  }

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        text="How did you like the service?"
        onSelect={handleSetPercentage1}
        percentage={percentage1}
      />
      <SelectPercentage
        text="How did you friend like the service?"
        onSelect={handleSetPercentage2}
        percentage={percentage2}
      />
      <BillOutput bill={bill} tip={tip} />
      <Reset onClick={handleReset} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <>
      <p>How much was the bill?</p>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </>
  );
}

function SelectPercentage({ text, onSelect, percentage }) {
  return (
    <>
      <p>{text}</p>
      <select value={percentage} onChange={onSelect}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}

function Reset({ onClick }) {
  return <button onClick={onClick}>Reset</button>;
}

function BillOutput({ bill, tip }) {
  const totalBill = bill + tip;
  return (
    <p>
      You pay {totalBill}( {bill} + {tip})
    </p>
  );
}

export default App;
