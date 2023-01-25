import React from "react";
import { useState, useEffect } from "react";

function Effects() {
  var [chosenValue, setChosenValue] = useState();

  useEffect(() => {
    console.log(chosenValue);
    fetch("https://dummyjson.com/" + chosenValue)
      .then((res) => res.json())
      .then((json) => console.log(json));
  });

  return (
    <>
      <div className="btn_container">
        <button
          onClick={() => {
            setChosenValue("Posts");
          }}
        >
          Posts
        </button>
        <br />
        <button
          onClick={() => {
            setChosenValue("Comments");
          }}
        >
          Comments
        </button>
        <br />
        <button
          onClick={() => {
            setChosenValue("Products");
          }}
        >
          Products
        </button>
      </div>
      <h1>{chosenValue}</h1>
    </>
  );
}

export default Effects;
