import "./Product.css";
import { Link } from "react-router-dom";
function Product({ description, imageUrl, name, countInStock, id }) {
  return (
    <div className="product">
      <img src={imageUrl} alt="" />
      <div className="product__info">
        <p className="info__name"> {name}</p>
        <p className="info__description">{description},</p>
        <p className="info__price">$499</p>
        <Link to={`/product/${id}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
}

export default Product;
