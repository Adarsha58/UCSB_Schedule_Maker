import API from "../../utils/API";

export const API_CALL = (quarter, courseName) => {
  return (dispatch) => {
    API.getClasses(quarter, courseName, 3500, (res) => {
      dispatch({
        type: "SEARCH_CLICKED",
        payload: res.data,
      });
    });
  };
};
