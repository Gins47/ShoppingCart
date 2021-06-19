import "./ProductScreen.css";
function ProductScreen() {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt=""
          />
          <div className="left__info">
            <p className="left__name">PlayStation 5</p>
            <p>Price: $499</p>
            <p>
              Discription: PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the
              successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore,
              and South Korea, and November 19, 2020 onwards in other major markets except China and India.
            </p>
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
