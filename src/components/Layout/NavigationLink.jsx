import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationLink = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Link to={props.href}>
      <a
        className={
          currentPath == props.href
            ? "nav-item nav-link active"
            : "nav-item nav-link"
        }
      >
        {props.children}
      </a>
    </Link>
  );
};

export default NavigationLink;
