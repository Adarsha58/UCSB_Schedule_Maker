const defaultState = {
  dropdown_value_quarter: "FALL 2020",
  dropdown_value_courses: "Computer Science - CMPSC",
};

const dropdownValues = (state = defaultState, action) => {
  switch (action.type) {
    case "DROPDOWN_SELECTED_QUARTER":
      return {
        ...state,
        dropdown_value_quarter: action.payload,
      };
    case "DROPDOWN_SELECTED_CLASSES":
      return {
        ...state,
        dropdown_value_courses: action.payload,
      };
    default:
      return state;
  }
};

export default dropdownValues;
