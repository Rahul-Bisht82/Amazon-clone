import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <Link to="/login">
            <img
              className="footer-logo-img"
              src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="logo"
            />
          </Link>
        </div>
        <ul>
          <li>
            <a href="#"> Condition Of Use & sale </a>
          </li>
          <li>
            <a href="#"> Privacy Notic</a>
          </li>
          <li>
            <a href="#"> Cookies Notic</a>
          </li>
          <li>
            <a href="#"> Intrest Based Ads Notice</a>
          </li>
        </ul>
        <div className="copyright">
          <p>@Copyright by Rahul Bisht</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
