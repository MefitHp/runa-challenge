import React from "react";
import Layout from "../Layout/Layout";
// import SearchBar from "../common/SearchBar";
import Features from "../features/Features";

const Main = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          {/* <SearchBar /> */}
          <Features />
        </div>
      </section>
    </Layout>
  );
};

export default Main;
