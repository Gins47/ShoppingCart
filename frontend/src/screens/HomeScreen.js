import React from "react";
import "./HomeScreen.css";
import axios from "../modules/axios";

import { useState, useEffect } from "react";
// Components
import Product from "../components/Product";
function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get();

      setProducts(request.data);
      return request.data;
    }
    fetchData();
  }, []);
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {products.map((product) => {
          return (
            <Product
              description={product.description}
              imageUrl={product.imageUrl}
              name={product.name}
              countInStock={product.countInStock}
              id={product._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeScreen;
