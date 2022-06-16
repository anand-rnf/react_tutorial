import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Layout = (props) => {
  return (
    <>
      <Topbar />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
