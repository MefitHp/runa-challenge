import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStoreItems } from "./../../redux/ducks/main.ducks";
import { Flex } from "rebass";
import FeatureHeader from "../common/FeatureHeader";

const NewsMain = ({ getStoreItems, items = [] }) => {
  console.log(items);
  useEffect(() => {
    getStoreItems();
  }, [getStoreItems]);
  return (
    <div className="container">
      <FeatureHeader
        title="ITEM STORE"
        description="Looking for something new? You came to the right place!"
      />
      <Flex flexWrap="wrap">
        {/* {news &&
          news.map((newData, index) => (
            <NewsCart newData={newData} key={index} />
          ))} */}
      </Flex>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return { items: state.main.data, progress: state.main.progress };
};
export default connect(
  mapStateToProps,
  { getStoreItems }
)(NewsMain);
