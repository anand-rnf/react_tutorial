import React, { useState } from "react";

const AddToCart = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (action) => {
    if (action == "add") {
      setQuantity((prevState) => prevState + 1);
    } else {
      setQuantity((prevState) => {
        if (prevState != 1) {
          return prevState - 1;
        }
        return prevState;
      });
    }
  };
  return (
    <div className="d-flex align-items-center mb-4 pt-2">
      <div className="input-group quantity mr-3" style={{ width: "130px" }}>
        <div className="input-group-btn">
          <button
            className="btn btn-primary btn-minus"
            onClick={() => updateQuantity("sub")}
          >
            <i className="fa fa-minus"></i>
          </button>
        </div>
        <input
          type="text"
          className="form-control bg-secondary text-center"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <div className="input-group-btn">
          <button
            className="btn btn-primary btn-plus"
            onClick={() => updateQuantity("add")}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <button
        className="btn btn-primary px-3"
        onClick={() => addToCart(quantity)}
      >
        <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
