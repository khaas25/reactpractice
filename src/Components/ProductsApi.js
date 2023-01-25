import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductsApi() {
  var [products, setProducts] = useState([]);
  var navigate = useNavigate();

  async function getData() {
    var response = await fetch("https//dummyjson.com/products");
    console.log(response);
    var data = await response.json();
    setProducts(data.products);
  }
  getData();

  function getId(id) {
    navigate("/productdetails");
  }

  return (
    <>
      <div className="all-products">
        {products.map((item) => {
          return (
            <>
              <div className="product" onClick={() => getId(item.id)}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProductsApi;
