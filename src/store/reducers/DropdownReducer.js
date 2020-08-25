const defaultState = {
  dropdown_value_level: "Undergraduate",
  dropdown_value_quarter: "FALL 2020",
  dropdown_value_courses: "Computer Science - CMPSC",
  dropdown_value_find_by_filter: "Department",
  dropdown_value_college: "LS",
  dropdown_value_area: "A",
};

const dropdownValues = (state = defaultState, action) => {
  switch (action.type) {
    case "DROPDOWN_SELECTED_LEVEL":
      return {
        ...state,
        dropdown_value_level: action.payload,
      };
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
    case "DROPDOWN_SELECTED_FINDBYFILTER":
      return {
        ...state,
        dropdown_value_find_by_filter: action.payload,
      };
    case "DROPDOWN_SELECTED_COLLEGE":
      return {
        ...state,
        dropdown_value_find_by_college: action.payload,
      };
    case "DROPDOWN_SELECTED_AREA":
      return {
        ...state,
        dropdown_value_find_by_college: action.payload,
      };
    default:
      return state;
  }
};

export default dropdownValues;
