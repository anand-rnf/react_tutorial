import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <Category
          productCount="15"
          image="img/cat-1.jpg"
          categoryName="Men's dresses"
        />
        <Category
          productCount="15"
          image="img/cat-1.jpg"
          categoryName="Men's dresses"
        />
        <Category
          productCount="15"
          image="img/cat-1.jpg"
          categoryName="Men's dresses"
        />
        <Category
          productCount="15"
          image="img/cat-1.jpg"
          categoryName="Men's dresses"
        />
        <Category
          productCount="15"
          image="img/cat-1.jpg"
          categoryName="Men's dresses"
        />
        <Category
          productCount="15"
          image="img/cat-1.jpg"
          categoryName="Men's dresses"
        />
      </div>
    </div>
  );
};

export default Categories;
