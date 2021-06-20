import "./ProductScreen.css";

import axios from "../modules/axios";

import { useState, useEffect } from "react";
// Components
function ProductScreen(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var config = {
        method: "get",
        url: `http://localhost:5000/api/products/${props.match.params.id}`,
        headers: {},
      };

      const request = await axios(config);
      console.log(request.data);

      setProduct(request.data);
      return request.data;
    }
    fetchData();
  }, [props.match.params.id]);

  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src={product.imageUrl} alt="" />
          <div className="left__info">
            <p className="left__name">{product.name}</p>
            <p>Price: $499</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>$499</span>
          </p>
        </div>
        <p>
          Status: <span>In Stock</span>
        </p>
        <p>
          Qty
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </p>
        <p>
          <button type="button">Add To Cart</button>
        </p>
      </div>
    </div>
  );
}

export default ProductScreen;
