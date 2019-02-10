import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";
export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current-user");
  dispatch({ type: FETCH_USER, payload: response.data });
};
export const handleToken = token => async dispatch => {
  const response = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: response.data });
};
export const submitSurvey = (formValues, history) => async dispatch => {
  const response = await axios.post("/api/surveys", formValues);
  dispatch({ type: FETCH_USER, payload: response.data });
  history.push("/surveys");
};
export const fetchSurvey = () => async dispatch => {
  const response = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: response.data });
};
export const deleteSurvey = (id, history) => async dispatch => {
  await axios.post(`/api/surveys/${id}`, { id });
  dispatch({ type: "DELETE_SURVEY", payload: id });
  history.push("/surveys");
};
