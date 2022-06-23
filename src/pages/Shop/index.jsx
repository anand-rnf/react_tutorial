import React from "react";
import Layout from "../../components/Layout";
import PageHeader from "../../components/Layout/PageHeader";
import ColorFilter from "../../components/Shop/ColorFilter";
import Pagination from "../../components/Shop/Pagination";
import PriceFilter from "../../components/Shop/PriceFilter";
import Product from "../../components/Shop/Product";
import SizeFilter from "../../components/Shop/SizeFilter";

const Shop = () => {
  return (
    <>
      <Layout>
        <PageHeader
          title="Our Shop"
          breadcrumb={[
            {
              name: "Home",
              href: "/",
            },
            {
              name: "Shop",
            },
          ]}
        />
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-3 col-md-12">
              <PriceFilter />
              <ColorFilter />
              <SizeFilter />
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="row pb-3">
                <div className="col-12 pb-1">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <form action="">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by name"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text bg-transparent text-primary">
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                      </div>
                    </form>
                    <div className="dropdown ml-4">
                      <button
                        className="btn border dropdown-toggle"
                        type="button"
                        id="triggerId"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Sort by
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="triggerId"
                      >
                        <a className="dropdown-item" href="#">
                          Latest
                        </a>
                        <a className="dropdown-item" href="#">
                          Popularity
                        </a>
                        <a className="dropdown-item" href="#">
                          Best Rating
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shop;
