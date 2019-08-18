import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNews } from "./../../redux/ducks/main.ducks";
import { Flex } from "rebass";
import NewsCart from "./NewsCart";
import FeatureHeader from "../common/FeatureHeader";

const NewsMain = ({ getNews, news = [] }) => {
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
        {news &&
          news.map((newData, index) => (
            <NewsCart newData={newData} key={index} />
          ))}
      </Flex>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return { news: state.main.data, progress: state.main.progress };
};
export default connect(
  mapStateToProps,
  { getNews }
)(NewsMain);
