import React from "react";
import { useState } from "react";

function AddingJS() {
  var [arr, setArray] = useState([]);
  function fillArray() {
    setArray([10, 20, 30, 40]);
  }
  return (
    <>
      <div className="btn-container">
        {arr.map((item) => {
          return <h1>{item}</h1>;
        })}

        <button onClick={fillArray}>Click Me</button>
        <br />
        <br />
        {/* <button onClick={test}>Change State</button> */}
      </div>
    </>
  );
}

export default AddingJS;
