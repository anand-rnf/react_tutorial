import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import PageHeader from "../../components/Layout/PageHeader";
import { useGetSingleProductQuery } from "../../services/shop";
import AddToCart from "./AddToCart";
import ImageCarousal from "./ImageCarousal";
import Navigation from "./Navigation";
import SocialShare from "./SocialShare";
import TabContent from "./TabContent";
import VariantForm from "./VariantForm";

function Product() {
  const [activeTab, setActiveTab] = useState("description");
  const { slug } = useParams();
  const { data, isLoading, error } = useGetSingleProductQuery(slug);
  const product = data?.data;

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Product Detail"
        breadcrumb={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Product Detail",
          },
        ]}
      />
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <ImageCarousal />
          <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">{product?.title}</h3>
            <div className="d-flex mb-3">
              <div className="text-primary mr-2">
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star-half-alt"></small>
                <small className="far fa-star"></small>
              </div>
              <small className="pt-1">(50 Reviews)</small>
            </div>
            <h3 className="font-weight-semi-bold mb-4">
              ${parseFloat(product?.price).toFixed(2)}
            </h3>
            <p className="mb-4">{product?.description}</p>
            <VariantForm />
            <AddToCart />
            <SocialShare />
          </div>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <Navigation activeTab={activeTab} tabClick={handleTabClick} />
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
