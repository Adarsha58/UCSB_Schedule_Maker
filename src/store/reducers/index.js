import { combineReducers } from "redux";
import dropdownValues from "./DropdownReducer";
import API_response from "./API_response_reducer";
import buttonReducer from "./ScheduleButtonReducer";

export default combineReducers({
  DropdownReducer: dropdownValues,
  APIResponseReducer: API_response,
  ScheduleButtonReducer: buttonReducer,
});
