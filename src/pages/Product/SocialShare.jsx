import React from "react";

const SocialShare = () => {
  return (
    <div className="d-flex pt-2">
      <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
      <div className="d-inline-flex">
        <a className="text-dark px-2" href="">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="text-dark px-2" href="">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="text-dark px-2" href="">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className="text-dark px-2" href="">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialShare;
