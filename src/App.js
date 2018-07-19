import React, { Component } from "react";
import "./Bootstrap.css";

import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import ResetPassword from "./auth/ResetPassword";
import ChangePassword from "./auth/ChangePassword";
import Dashboard from "./auth/Dashboard";
import Profile from "./auth/Profile";
import testview from "./auth/testview";
import contactpage from "./auth/ContactPage";

import NoMatch from "./auth/NoMatch";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route //przekierowanie na signin ze strony glownej localhost:3000
            exact
            path="/"
            render={() => <Redirect to={"/signin"} />}
          />
          <Route
            path={"/signin"}
            component={SignIn} /*sciezka do signin = localhost:3000/signin */
          />
          <Route path={"/signup"} component={SignUp} />
          <Route path={"/resetpassword"} component={ResetPassword} />
          <Route path={"/changepassword"} component={ChangePassword} />
          <Route path={"/dashboard"} component={Dashboard} />
          <Route path={"/profile"} component={Profile} />
          <Route path={"/testview"} component={testview} />
          <Route path={"/contactpage"} component={contactpage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
export default App;
