import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStoreItems } from "./../../redux/ducks/main.ducks";
import { Flex } from "rebass";
import FeatureHeader from "../common/FeatureHeader";
import StoreCard from "./StoreCard";

const NewsMain = ({ getStoreItems, items = [], progress }) => {
  useEffect(() => {
    getStoreItems();
  }, [getStoreItems]);

  return (
    <div className="container">
      <FeatureHeader
        title="ITEM STORE"
        description="Looking for something new? You came to the right place!"
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {items &&
          items.map((itemData, index) => (
            <StoreCard key={index} itemData={itemData} />
          ))}
      </Flex>
    </div>
  );
};
const mapStateToProps = state => {
  return { items: state.main.data, progress: state.main.progress };
};
export default connect(
  mapStateToProps,
  { getStoreItems }
)(NewsMain);
