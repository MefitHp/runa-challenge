import React from "react";
import styled from "@emotion/styled";
import { Box } from "rebass";

const StoreCard = ({ itemData = {} }) => {
  const cost = itemData && itemData.store && itemData.store.cost;
  const item = (itemData && itemData.item) || {};
  const { name = "", rarity = "", description = "" } = item;
  const background =
    (itemData &&
      itemData.item &&
      itemData.item.images &&
      itemData.item.images.background) ||
    "";

  return (
    <CardContainer width={[1, 1 / 2, 1 / 3]} p={3} m={4}>
      <img src={background} alt={name} />
      <h2>{name}</h2>
      <p>{description ? description : "No description provided"}</p>
      <p style={{ fontSize: 20 }}>${cost}</p>
      <span className="tag is-info is-large">{rarity}</span>
    </CardContainer>
  );
};

const CardContainer = styled(Box)`
  background: #fff;
  position: relative;
  border-radius: 8px;
  min-height: 200px;
  box-shadow: 0 1px 6px hsla(0, 0%, 0%, 0.4);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
  & img {
    background: hsla(0, 0%, 48%);
    box-shadow: 0 1px 6px hsla(0, 0%, 0%, 0.4);
    width: 150px;
    height: 150px;
    right: -25px;
    border-radius: 5px;
    position: absolute;
    object-fit: cover;
  }
  & h2 {
    font-size: 24px;
    font-weight: 450;
  }
  & p {
    max-width: 60%;
  }
`;

export default StoreCard;
