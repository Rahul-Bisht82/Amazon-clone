import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      {/* ---logo of img--- */}
      <Link to="/login">
        <img
          className="logo-img"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo"
        />
      </Link>
      {/* ------search box------ */}
      <div className="header-search">
        <input type="text" className="header-search-input" />
        <SearchIcon className="header-search-icon" />
      </div>
      {/* -----3 links--- */}
      <div className="header-nav">
        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option-one">Hello Qazi</span>
            <span className="header-option-two">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-one">Return</span>
            <span className="header-option-two">& Order</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-one">try</span>
            <span className="header-option-two">Prime</span>
          </div>
        </Link>
        {/* -----check  produch list----- */}
        <Link to="/checkout" className="header-link">
          <div className="header-basket">
            <ShoppingCartIcon />
            <span className="header-option-two">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
