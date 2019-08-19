import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNews } from "./../../redux/ducks/main.ducks";
import { Flex } from "rebass";
import NewsCart from "./NewsCart";
import FeatureHeader from "../common/FeatureHeader";

const NewsMain = ({ getNews, news = [], progress }) => {
  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <div className="container">
      <FeatureHeader
        title="FORNITE NEWS"
        description=" Discover whats new in this season!"
      />
      <Flex flexWrap="wrap">
        {progress === "loading" ? (
          <Flex
            m={4}
            p={4}
            justifyContent="center"
            style={{ backgroundColor: "#fff", width: "100%" }}
          >
            <h3 className="has-text-centered is-size-3 has-text-weight-bold	">
              Loading..
            </h3>
          </Flex>
        ) : (
          ""
        )}

        {news && news.length && progress === "success"
          ? news.map((newData, index) => (
              <NewsCart newData={newData} key={index} />
            ))
          : ""}
      </Flex>
    </div>
  );
};
const mapStateToProps = state => {
  return { news: state.main.data, progress: state.main.progress };
};
export default connect(
  mapStateToProps,
  { getNews }
)(NewsMain);
