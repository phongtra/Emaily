import React from "react";

const renderError = ({ touched, error }) => {
  if (touched && error) {
    return (
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {error}
      </div>
    );
  }
};
const SurveyField = ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input style={{ marginBottom: "5px" }} {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};

export default SurveyField;
