import API from "../../utils/API";

export const API_CALL = (quarter, courseName, level, college, area) => {
  return (dispatch) => {
    API.getClasses(quarter, courseName, level, college, area, (res) => {
      dispatch({
        type: "SEARCH_CLICKED",
        payload: res.data,
      });
    });
  };
};
