import React from "react";

const Imgbanner = (props) => {
  return (
    <>
      <div className="img-banner">
        <img className="home-div-img" src={props.image} alt="banner" />
      </div>
    </>
  );
};
export default Imgbanner;
