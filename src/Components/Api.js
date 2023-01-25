import React from "react";
import { useState, useEffect } from "react";

function Api() {
  var [apiName, setApiName] = useState();
  var [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      var response = await fetch("https://dummyjson.com/" + apiName);
      console.log(response);
      var data = await response.json();
      setProducts(data.comments);
    }
    getData();
  });

//   getData();
  return (
    <>
      {products.map((item) => {
        return <h1>{item.body}</h1>;
      })}

      <div className="btn__container">
        <button onClick={() => setApiName("comments")}>Responses</button>
      </div>
    </>
  );
}

export default Api;
