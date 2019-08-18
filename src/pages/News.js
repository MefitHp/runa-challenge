import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import NewsMain from "../components/news/NewsMain";

const User = ({ match }) => {
  const { path } = match;
  return (
    <Layout>
      <Switch>
        <Route exact path={`${path}`} component={NewsMain} />
        {/* <Route path={`${path}/:id`} component={UserDetail} /> */}
      </Switch>
    </Layout>
  );
};

export default User;
