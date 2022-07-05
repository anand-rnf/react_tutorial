import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import PageHeader from "../../components/Layout/PageHeader";
import ColorFilter from "../../components/Shop/ColorFilter";
import Pagination from "../../components/Shop/Pagination";
import PriceFilter from "../../components/Shop/PriceFilter";
import Product from "../../components/Shop/Product";
import SizeFilter from "../../components/Shop/SizeFilter";
import { useGetSingleCategoryQuery } from "../../services/shop";
import ReactPaginate from "react-paginate";

const Shop = () => {
  const { slug } = useParams();
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const { data, error, isLoading } = useGetSingleCategoryQuery(slug);
  const itemsPerPage = 3;
  const products = data ? data?.data?.products : [];

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const RenderProducts = () => {
    if (isLoading) {
      return (
        <div
          className="col-md-12"
          style={{ textAlign: "center", padding: "100px" }}
        >
          Loading .....
        </div>
      );
    } else if (error) {
      return (
        <div
          className="col-md-12"
          style={{ textAlign: "center", padding: "100px" }}
        >
          Unable to load data .....
        </div>
      );
    }
    return (
      currentItems &&
      currentItems.map((product) => {
        return (
          <Product
            key={product._id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            slug={product.slug}
          />
        );
      })
    );
  };

  useEffect(() => {
    setItemOffset(0);
  }, [slug]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

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
                <RenderProducts />
                <div className="col-12 pb-1">
                  <nav aria-label="Page navigation">
                    <ReactPaginate
                      className="pagination justify-content-center mb-3"
                      breakLabel="..."
                      nextLabel=" >"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      pageCount={pageCount}
                      previousLabel="< "
                      renderOnZeroPageCount={null}
                      breakClassName={"page-item"}
                      breakLinkClassName={"page-link"}
                      containerClassName={"pagination"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                      nextClassName={"page-item"}
                      nextLinkClassName={"page-link"}
                      activeClassName={"active"}
                    />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shop;
