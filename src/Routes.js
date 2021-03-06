import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import User from "./pages/User";
import News from "./pages/News";
import Store from "./pages/Store";
import MyProfile from "./pages/MyProfile";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/user" component={User} />
      <Route path="/news" component={News} />
      <Route path="/store" component={Store} />
      <Route path="/profile" component={MyProfile} />
    </Switch>
  </Router>
);

export default Routes;
