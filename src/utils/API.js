import axios from "axios";
const ucsbEndpoint = "https://api.ucsb.edu/academics/curriculums/v1";
const webScrapperEndpoint = "http://localhost:3000";

function quarterParser(quarter) {
  switch (quarter.toUpperCase()) {
    case "FALL 2020":
      return "20204";
    case "SUMMER 2020":
      return "20203";
    case "SPRING 2020":
      return "20202";
    case "WINTER 2020":
      return "20201";
    default:
      return "20204";
  }
}

function classNameParser(className) {
  const spilter = className.split("-");
  return spilter[spilter.length - 1].trim();
}

const API = {
  getClasses: async (quarter, className, level, college, area, success) => {
    let params = {};

    console.log(quarter, className, level, college, area);
    className !== "none"
      ? (params = {
          quarter: quarterParser(quarter),
          pageSize: 200,
          subjectCode: classNameParser(className),
          objLevelCode: level[0],
        })
      : (params = {
          quarter: quarterParser(quarter),
          pageSize: 200,
          objLevelCode: level[0],
          areas: area.split(" ")[1],
        });

    axios
      .get(`${ucsbEndpoint}/classes/search`, {
        params: params,
        headers: {
          "ucsb-api-key": process.env.REACT_APP_ucsb_api_key,
        },
      })
      .then((res) => {
        success(res);
      });
  },
};

export default API;
