import React from "react";

const Product = (props) => {
  return (
    <>
      <div className="product">
        <div className="product-info">
          <p className="product-title">{props.title}</p>
          <p className="product-price">
            <strong>$ </strong>
            <strong>{props.price}</strong>
          </p>
          <div className="product-rating">
            {Array(props.rating)
              .fill()
              .map((_) => (
                <p>🌟🌟🌟🌟</p>
              ))}
          </div>
        </div>

        <img className="product-img" src={props.images} alt="product images" />
        <button className="btn">Add to card</button>
      </div>
    </>
  );
};
export default Product;
