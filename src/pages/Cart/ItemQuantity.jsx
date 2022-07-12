import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../../features/shopSlice";

const ItemQuantity = ({ itemQuantity, id }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(itemQuantity);

  const handleQuantityUpdate = (action) => {
    let quantityChange = 0;
    if (action == "add") {
      quantityChange = 1;
    } else if (action == "sub") {
      quantityChange = -1;
    }
    setQuantity((prevState) => {
      return prevState + quantityChange;
    });
    const item = {
      id,
      quantity: quantityChange,
    };
    dispatch(updateCart(item));
  };

  return (
    <td className="align-middle">
      <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
        <div className="input-group-btn">
          <button
            className="btn btn-sm btn-primary btn-minus"
            onClick={() => handleQuantityUpdate("sub")}
          >
            <i className="fa fa-minus"></i>
          </button>
        </div>
        <input
          type="text"
          className="form-control form-control-sm bg-secondary text-center"
          value={quantity}
          readOnly
        />
        <div className="input-group-btn">
          <button
            className="btn btn-sm btn-primary btn-plus"
            onClick={() => handleQuantityUpdate("add")}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </td>
  );
};

export default ItemQuantity;
