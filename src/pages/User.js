import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import UserDetail from "../components/user/UserDetail";

const User = ({ match }) => {
  const { path } = match;
  return (
    <Layout>
      <Switch>
        <Route exact path={`${path}`} render={() => <p>Root</p>} />
        <Route path={`${path}/:id`} component={UserDetail} />
      </Switch>
    </Layout>
  );
};

export default User;
