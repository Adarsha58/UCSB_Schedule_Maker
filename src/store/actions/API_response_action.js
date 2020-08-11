import API from "../../utils/API";

export const API_CALL = (quarter, courseName) => {
  console.log("I am the API Call");
  return (dispatch) => {
    API.getClasses(quarter, courseName, (res) => {
      dispatch({
        type: "SEARCH_CLICKED",
        payload: res.data,
      });
    });
  };
};

