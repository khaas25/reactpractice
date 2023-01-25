import React from "react";
import { useState } from "react";
function UseStateEx() {
  var [count, setCount] = useState(0);
  function incValue() {
    count++;
    setCount(count);
  }
  function decValue() {
    count--;
    setCount(count);
  }
  return (
    <>
      <div className="section">
        <button onClick={incValue}>+</button>
        <span>{count}</span>
        <button onClick={decValue}>-</button>
      </div>
    </>
  );
}

export default UseStateEx;
