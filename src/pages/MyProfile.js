import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProfileMain from "../components/profile/ProfileMain";
import ProfileDetail from "../components/profile/ProfileDetail";

const MyProfile = ({ match }) => {
  const { path } = match;
  return (
    <Layout>
      <div className="container">
        <Switch>
          <Route exact path={`${path}`} component={ProfileMain} />
          <Route path={`${path}/:id`} component={ProfileDetail} />
        </Switch>
      </div>
    </Layout>
  );
};

export default MyProfile;
