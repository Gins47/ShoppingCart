import React from "react";
import "./HomeScreen.css";

// Components
import Product from "../components/Product";
function HomeScreen() {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default HomeScreen;
