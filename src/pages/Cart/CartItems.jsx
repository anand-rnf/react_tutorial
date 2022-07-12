import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../features/shopSlice";
import ItemQuantity from "./ItemQuantity";

const CartItems = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart({ id }));
  };

  return (
    <div className="col-lg-8 table-responsive mb-5">
      <table className="table table-bordered text-center mb-0">
        <thead className="bg-secondary text-dark">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td className="align-middle">
                  <img
                    src={"/img/product-1.jpg"}
                    alt=""
                    style={{ width: "50px" }}
                  />{" "}
                  {item.product.title}
                </td>
                <td className="align-middle">
                  ${parseFloat(item.product.price).toFixed(2)}
                </td>
                <ItemQuantity itemQuantity={item.quantity} id={item.id} />
                <td className="align-middle">
                  $
                  {parseFloat(
                    parseFloat(item.product.price) * item.quantity
                  ).toFixed(2)}
                </td>
                <td className="align-middle">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartItems;
