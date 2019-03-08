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
          <button
            onClick={() => props.deleteSurvey(survey._id, props.history)}
            className="btn-flat blue right"
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
};
const SurveyList = props => {
  useEffect(() => {
    props.fetchSurvey();
  }, []);
  if (!props.survey === 0) {
    return <h5>Create a new survey by clicking the add button</h5>;
  }
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
