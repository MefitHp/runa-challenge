import React from "react";
import { Flex } from "rebass";
import FeatureCard from "./FeatureCard";
import { features } from "./utils";
const Features = () => {
  return (
    <Flex flexWrap="wrap" py={4}>
      {features.map((feature, i) => (
        <FeatureCard key={i} feature={feature} />
      ))}
    </Flex>
  );
};

export default Features;
