import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main/Main";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </Router>
);

export default Routes;
