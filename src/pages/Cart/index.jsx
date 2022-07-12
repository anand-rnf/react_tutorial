import React from "react";
import Layout from "../../components/Layout";
import PageHeader from "../../components/Layout/PageHeader";
import ApplyCoupon from "./ApplyCoupon";
import CartItems from "./CartItems";
import Summery from "./Summery";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.shop);
  return (
    <Layout>
      <PageHeader
        title="Shopping Cart"
        breadcrumb={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Cart",
          },
        ]}
      />
      <div className="container-fluid pt-5">
        {cart.length ? (
          <div className="row px-xl-5">
            <CartItems cart={cart} />
            <div className="col-lg-4">
              <ApplyCoupon />
              <Summery cart={cart} />
            </div>
          </div>
        ) : (
          <div className="col-lg-12 text-center">Your cart is empty.</div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
