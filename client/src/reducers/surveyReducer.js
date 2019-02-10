import _ from "lodash";
import { FETCH_SURVEYS } from "../actions/types";
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    case "DELETE_SURVEY":
      return state.filter(({ _id }) => _id !== action.payload);
    default:
      return state;
  }
};
