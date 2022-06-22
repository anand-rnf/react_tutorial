import React from "react";
import Categories from "../../components/Home/Categories";
import Featured from "../../components/Home/Featured";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Featured />
      <Categories />
    </Layout>
  );
};

export default Home;
