import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/shop"} element={<Shop />} />
    </Routes>
  );
};

export default AppRoutes;
