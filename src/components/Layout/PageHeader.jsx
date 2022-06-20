import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="container-fluid bg-secondary mb-5">
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "300px" }}
      >
        <h1 className="font-weight-semi-bold text-uppercase mb-3">{title}</h1>
        <div className="d-inline-flex">
          {breadcrumb.map((item, key) => {
            return (
              <React.Fragment key={key}>
                {key != 0 ? <p className="m-0 px-2">-</p> : ""}
                {item.href != undefined ? (
                  <p className="m-0">
                    <Link to={item.href}>{item.name}</Link>
                  </p>
                ) : (
                  <p className="m-0">{item.name}</p>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
