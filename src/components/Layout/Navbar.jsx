import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import HeaderCarousel from "./HeaderCarousel";
import NavigationLink from "./NavigationLink";

const Navbar = () => {
  const { categories } = useSelector((state) => state.shop);
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div
      className={
        currentPath === "/" ? "container-fluid mb-5" : "container-fluid"
      }
    >
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav
            className={
              currentPath === "/"
                ? "collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                : "collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
            }
            style={
              currentPath == "/"
                ? {}
                : { width: "calc(100% - 30px)", zIndex: "1" }
            }
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: "410px" }}
            >
              {categories.map((category) => {
                return (
                  <Link
                    key={category._id}
                    to={`/shop/${category.slug}`}
                    className="nav-item nav-link"
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <NavigationLink href="/">Home</NavigationLink>
                <NavigationLink href="/shop">Shop</NavigationLink>
                <a href="detail.html" className="nav-item nav-link">
                  Shop Detail
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="cart.html" className="dropdown-item">
                      Shopping Cart
                    </a>
                    <a href="checkout.html" className="dropdown-item">
                      Checkout
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <div className="navbar-nav ml-auto py-0">
                <a href="" className="nav-item nav-link">
                  Login
                </a>
                <a href="" className="nav-item nav-link">
                  Register
                </a>
              </div>
            </div>
          </nav>
          {currentPath === "/" ? <HeaderCarousel /> : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
