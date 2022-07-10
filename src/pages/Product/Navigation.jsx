import React from "react";

const Navigation = ({ activeTab, tabClick }) => {
  return (
    <div className="nav nav-tabs justify-content-center border-secondary mb-4">
      <a
        className={`nav-item nav-link ${
          activeTab == "description" ? "active" : ""
        }`}
        data-toggle="tab"
        href="#tab-pane-1"
        onClick={() => tabClick("description")}
      >
        Description
      </a>
      <a
        className={`nav-item nav-link ${
          activeTab == "information" ? "active" : ""
        }`}
        data-toggle="tab"
        href="#tab-pane-2"
        onClick={() => tabClick("information")}
      >
        Information
      </a>
      <a
        className={`nav-item nav-link ${
          activeTab == "reviews" ? "active" : ""
        }`}
        data-toggle="tab"
        href="#tab-pane-3"
        onClick={() => tabClick("reviews")}
      >
        Reviews (0)
      </a>
    </div>
  );
};

export default Navigation;
