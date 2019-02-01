import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const Survey = () => {
  return <h1>Survey</h1>;
};
const Create = () => {
  return <div>Create</div>;
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
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={Survey} />
          <Route path="/surveys/new" exact component={Create} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default connect(
  null,
  actions
)(App);
