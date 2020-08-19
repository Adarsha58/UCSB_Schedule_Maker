import axios from "axios";
const baseURL = "https://api.ucsb.edu/academics/curriculums/v1";

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
  getClasses: async (quarter, className, pageSize, success) => {
    axios
      .get(`${baseURL}/classes/search`, {
        params: {
          quarter: quarterParser(quarter),
          subjectCode: classNameParser(className),
          pageSize,
        },
        headers: {
          "ucsb-api-key": process.env.REACT_APP_ucsb_api_key,
        },
      })
      .then((res) => {
        console.log(res);
        success(res);
      });
  },
};

export default API;
