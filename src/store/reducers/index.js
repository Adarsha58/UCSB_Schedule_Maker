import { combineReducers } from "redux";
import dropdownValues from "./DropdownReducer";
import API_response from "./API_response_reducer";

export default combineReducers({
  DropdownReducer: dropdownValues,
  APIResponseReducer: API_response,
});
