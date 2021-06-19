import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = ({ click }) => {
  return (
    <nav className="navbar">
      {/*** LOGO */}
      <div className="navbar__logo">
        <h2>Shopping Cart</h2>
      </div>
      {/** Links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      {/** MENU */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
