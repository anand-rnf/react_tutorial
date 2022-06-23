import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationLink = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Link
      to={props.href}
      className={
        currentPath == props.href
          ? "nav-item nav-link active"
          : "nav-item nav-link"
      }
    >
      {props.children}
    </Link>
  );
};

export default NavigationLink;
