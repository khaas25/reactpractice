import React from "react";
import { useState } from "react";

function ObjectArray() {
  var [arr, setArray] = useState([]);
  var people = [
    { Name: "Kelsey", Age: "34", Gender: "Female" },
    { Name: "Kelsey", Age: "34", Gender: "Female" },
    { Name: "Kelsey", Age: "34", Gender: "Female" },
    { Name: "Kelsey", Age: "34", Gender: "Female" },
    { Name: "Kelsey", Age: "34", Gender: "Female" },
  ];

  function fillArr() {
    setArray(people);
    console.log(arr);
  }
  return (
    <>
      <button onClick={fillArr}>Click Me</button>

      {arr.map((item) => {
        return (
          <>
            <h1>{item["Name"]}</h1>
            <p>{item["Age"]}</p>
            <p>{item["Gender"]}</p>
          </>
        );
      })}
    </>
  );
}
export default ObjectArray;
