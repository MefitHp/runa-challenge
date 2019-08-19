import React from "react";
import { Redirect } from "react-router-dom";
import FeatureHeader from "../common/FeatureHeader";
import { Flex } from "rebass";
import { useCachedUser } from "../../customHooks/useCachedUser";
import NoUser from "./NoUser";

const ProfileMain = () => {
  const { user } = useCachedUser();
  return (
    <>
      <FeatureHeader
        title="My profile"
        description="Keep your stats on hand, add you profile if you haven't"
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {!user ? <NoUser /> : <Redirect to={`/profile/${user}`} />}
      </Flex>
    </>
  );
};

export default ProfileMain;
