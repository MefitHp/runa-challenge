import React from "react";
import { Link } from "react-router-dom";
import { Box } from "rebass";
import styled from "@emotion/styled";

const FeatureCard = ({ feature = {} }) => {
  const { title, src, description, url } = feature;
  return (
    <Box width={[1, 1, 1 / 2]} p={3}>
      <Link to={url}>
        <CardContainer>
          <Figure className="image is-4by3" src={src}>
            <Mask>
              <h3>{title.toUpperCase()}</h3>
              <p>{description}</p>
            </Mask>
          </Figure>
        </CardContainer>
      </Link>
    </Box>
  );
};

const CardContainer = styled(Box)`
  border-radius: 20px !important;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1px 6px hsla(0, 0%, 0%, 0.4);
  }
`;

const Figure = styled.figure`
  position: relative;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Mask = styled.div`
position absolute;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: rgba(0,0,0,0.3);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  text-shadow: 0px 1px 3px #000;
  & h3{
    font-size: 3em;
    font-weight: 550;
  }
  & p {
    font-size: 2em;
  }
`;

export default FeatureCard;
