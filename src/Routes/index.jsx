import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Shop from "../pages/Shop";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/shop/:slug"} element={<Shop />} />
      <Route path={"/product/:slug"} element={<Product />} />
      <Route path={"/cart"} element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
