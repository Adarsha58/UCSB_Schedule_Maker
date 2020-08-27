import API from "../../utils/API";
import filter from "../../utils/searchByGE";

export const API_CALL = (quarter, courseName, level, college, area) => {
  return (dispatch) => {
    API.getClasses(quarter, courseName, level, college, area, (res) => {
      dispatch({
        type: "SEARCH_CLICKED",
        payload: filter(res.data.classes, college),
      });
    });
  };
};
