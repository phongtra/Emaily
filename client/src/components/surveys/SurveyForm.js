import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import { FIELDS } from "./formFields";
const SurveyForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {_.map(FIELDS, ({ label, name }) => {
          return (
            <Field
              key={name}
              component={SurveyField}
              label={label}
              name={name}
            />
          );
        })}
        <button className="teal btn-flat right white-text" type="submit">
          Next
          <i className="material-icons right">done</i>
        </button>
        <Link to="/surveys" className="btn-flat red white-text">
          Cancel
        </Link>
      </form>
    </div>
  );
};

const validate = values => {
  const error = {};
  error.recipients = validateEmails(values.recipients || "");
  _.each(FIELDS, ({ name, label }) => {
    if (!values[name]) {
      error[name] = `You must provide a ${label}`;
    }
  });

  return error;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
