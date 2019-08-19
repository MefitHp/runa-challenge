import React from "react";
import { Box } from "rebass";
import styled from "@emotion/styled";
import { handleNewsBadge } from "./utils";
import moment from "moment";

const NewsCart = ({ newData = {} }) => {
  const { body, image, title, time } = newData;
  const adSpace = newData && newData.meta && newData.meta.adSpace;
  return (
    <Box width={[1, 1 / 2, 1 / 4]} p={3}>
      <div
        className="card"
        style={{ height: "100%", borderRadius: 8, overflow: "hidden" }}
      >
        <div className="card-image">
          <Figure className="image is-4by3" src={image} />
        </div>
        <div
          className="card-content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="media-content" style={{ flex: 1 }}>
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{body}</p>
          </div>
          <div style={{ borderTop: "1px solid rgba(0,0,0,.1)" }}>
            {adSpace && handleNewsBadge(adSpace)}
            <br />
            <time>{moment.unix(time).fromNow()}</time>
          </div>
        </div>
      </div>
    </Box>
  );
};

const Figure = styled.figure`
  position: relative;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-repeat: no-repeat;
`;

export default NewsCart;
