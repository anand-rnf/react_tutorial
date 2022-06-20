import React from "react";
import Layout from "../../components/Layout";
import PageHeader from "../../components/Layout/PageHeader";

const Shop = () => {
  return (
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
    </Layout>
  );
};

export default Shop;
