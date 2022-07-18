import React, { useCallback } from "react";
import Layout from "../../components/Layout";
import PageHeader from "../../components/Layout/PageHeader";
import ApplyCoupon from "./ApplyCoupon";
import CartItems from "./CartItems";
import Summery from "./Summery";
import { useSelector } from "react-redux";
import useRazorpay from "react-razorpay";

const Cart = () => {
  const RazorPay = useRazorpay();
  const { cart } = useSelector((state) => state.shop);

  const handlePayment = useCallback(async () => {
    // const order = await createOrder(params);

    const options = {
      key: "rzp_test_GCL8pP3ShFEKRI",
      amount: "50000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "order_JtJEMbBlxASGIn",
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new RazorPay(options);
    rzpay.on("payment.failed", function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
    rzpay.open();
  }, [RazorPay]);

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
              <Summery cart={cart} handlePayment={handlePayment} />
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
