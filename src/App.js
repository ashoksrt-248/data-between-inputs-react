import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(100);
  const [val, setVal] = useState("");
  const [inputVal1, setInputVal1] = useState("");
  const [inputVal2, setInputVal2] = useState("");
  useEffect(() => console.log("clicked"), [count]);
  const increase = () => {
    setCount(count + 1);
  };
  const handler = (e) => {
    setVal(e.target.value);
  };

  const handleInputValChange1 = (e) => {
    setInputVal1(e.target.value);
    setInputVal2(e.target.value);
  };
  const handleInputValChange2 = (e) => {
    setInputVal2(e.target.value);
    setInputVal1(e.target.value);
  };
  return (
    <div className="App">
      <h1></h1>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>&nbsp;
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <hr />
      <hr />
      <input type="text" onChange={handler} />
      <h1>{val}</h1>
      <hr />
      <br />
      <input type="text" onChange={handleInputValChange1} value={inputVal1} />
      <br />
      <br />
      <input type="text" value={inputVal2} onChange={handleInputValChange2} />
    </div>
  );
}
