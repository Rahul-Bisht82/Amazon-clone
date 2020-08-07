import React from "react";
import Product from "./Product";
import Imgbanner from "./Imgbanner";
const Productcom = () => {
  return (
    <>
      <div className="home-comp">
        {/* -----home row---- */}
        <div className="home-row">
          {/* -----product id , title ,price ,rating, images-- */}
          <Product
            id="11"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price="12"
            rating="5"
            images="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
          />
          {/* -----product id , title ,price ,rating, images-- */}
          <Product
            id="12"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, 1000 W, Red"
            price="299"
            rating="5"
            images="https://m.media-amazon.com/images/I/81O+GNdkzKL._AC_UY218_.jpg"
          />
        </div>
        {/* -----home row---- */}
        <div className="home-row">
          {/* -----product id , title ,price ,rating, images-- */}
          <Product
            id="21"
            title="Xiaomi Mi Smart Band 4 - Fitness Tracker with Heart Rate Monitor"
            price="23"
            rating="5"
            images="https://m.media-amazon.com/images/I/51XSDUKqAWL._AC_UY218_.jpg"
          />
          {/* -----product id , title ,price ,rating, images-- */}
          <Product
            id="22"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price="89"
            rating="5"
            images="https://m.media-amazon.com/images/I/91B+xrXdD+L._AC_UY218_.jpg"
          />
          {/* -----product id , title ,price ,rating, images-- */}
          <Product
            id="23"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price="1069"
            rating="5"
            images="https://m.media-amazon.com/images/I/81WhK5+gf2L._AC_UY218_.jpg"
          />
        </div>
        <Imgbanner image="https://images-eu.ssl-images-amazon.com/images/G/02/amazonservices/seller_success_stories/2020/07_Tony-Harris/tony-harris-1x-v3._CB408309378_.jpg" />
        {/* -----home row---- */}
        <div className="home-row">
          {/* -----product id , title ,price ,rating, images-- */}
          <Product
            id="25"
            title="Apple iPhone 11 Pro (64GB) - Space Grey"
            price="924"
            rating="5"
            images="https://m.media-amazon.com/images/I/81HSzsIkJdL._AC_UY218_.jpg"
          />
          {/* -----product id , title ,price ,rating, images-- */}
          <Product
            id="25"
            title="Apple iPhone 11 Pro (64GB) - Space Grey"
            price="924"
            rating="5"
            images="https://m.media-amazon.com/images/I/81HSzsIkJdL._AC_UY218_.jpg"
          />
          {/* -----product id , title ,price ,rating, images-- */}
          <Product
            id="25"
            title="Apple iPhone 11 Pro (64GB) - Space Grey"
            price="924"
            rating="5"
            images="https://m.media-amazon.com/images/I/81HSzsIkJdL._AC_UY218_.jpg"
          />
          {/* -----product id , title ,price ,rating, images-- */}
          <Product
            id="26"
            title="NApple iPhone X 64GB Space Grey."
            price="817"
            rating="5"
            images="https://m.media-amazon.com/images/I/51pQi346XcL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </>
  );
};
export default Productcom;
