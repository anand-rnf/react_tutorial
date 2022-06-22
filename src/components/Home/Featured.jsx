import React from "react";
import Feature from "./Feature";

const Featured = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <Feature icon="fa fa-check" name="Quality Product" />
        <Feature icon="fa fa-shipping-fast" name="Free Shipping" />
        <Feature icon="fas fa-exchange-alt" name="14-Day Return" />
        <Feature icon="fa fa-phone-volume" name="24/7 Support" />
      </div>
    </div>
  );
};

export default Featured;
