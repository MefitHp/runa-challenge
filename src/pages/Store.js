import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import StoreMain from "../components/store/StoreMain";

const User = ({ match }) => {
  const { path } = match;
  return (
    <Layout>
      <Switch>
        <Route exact path={`${path}`} component={StoreMain} />
      </Switch>
    </Layout>
  );
};

export default User;
