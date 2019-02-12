import React, { useEffect } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

const ThankYou = () => {
  return (
    <>
      <h5>Thank you for voting</h5>
      <Link to="/">Go to home page</Link>
    </>
  );
};
const Error = () => {
  return (
    <>
      <h1>404: Page not Found</h1>
      <Link to="/">Go to home page</Link>
    </>
  );
};
const App = props => {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container" style={{ height: "100%" }}>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" exact component={SurveyNew} />
            <Route
              path="/api/thanks/:surveyId/:choice"
              exact
              component={ThankYou}
            />
            <Route exact component={Error} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default connect(
  null,
  actions
)(App);
