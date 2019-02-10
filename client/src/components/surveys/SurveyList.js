import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
const renderSurveys = props => {
  return props.survey.reverse().map(survey => {
    return (
      <div className="card red accent-2" key={survey._id}>
        <div className="card-content white-text">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className="right">
            Sent on: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action white-text">
          <a>Yes: {survey.yes}</a>
          <a>No: {survey.no}</a>
        </div>
      </div>
    );
  });
};
const SurveyList = props => {
  useEffect(() => {
    props.fetchSurvey();
  }, []);

  return <div>{renderSurveys(props)}</div>;
};

const mapStateToProps = ({ survey }) => {
  return {
    survey
  };
};

export default connect(
  mapStateToProps,
  actions
)(SurveyList);
