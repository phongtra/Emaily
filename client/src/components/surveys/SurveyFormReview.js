import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FIELDS } from "./formFields";
import * as actions from "../../actions";
const SurveyFormReview = props => {
  const renderReview = props => {
    return FIELDS.map(({ label, name }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{props.formValues[name]}</div>
        </div>
      );
    });
  };
  return (
    <div>
      <h5>Please review your entries</h5>
      <div>{renderReview(props)}</div>
      <button onClick={props.onCancel} className="yellow btn-flat darken-3">
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => {
          props.submitSurvey(props.formValues, props.history);
        }}
      >
        Send Survey<i className="material-icons right">email</i>
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return { formValues: state.form.surveyForm.values };
};
export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
