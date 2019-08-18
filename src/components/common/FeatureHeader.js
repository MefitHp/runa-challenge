import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const FeatureHeader = ({ title, description }) => {
  return (
    <Section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered is-size-1">{title}</h1>
          <h2 className="subtitle has-text-centered">{description}</h2>
        </div>
        <BackButton to="/">
          <button className="button is-large">
            {" "}
            <i
              className="fas fa-arrow-circle-left"
              style={{ paddingRight: 8 }}
            />{" "}
            Go Back
          </button>
        </BackButton>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background: #fff;
  border-radius: 8px;
  position: relative;
`;

const BackButton = styled(Link)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export default FeatureHeader;
