import axios from "axios";
const baseURL = "https://api.ucsb.edu/academics/curriculums/v1";

function quarterParser(quarter) {
  switch (quarter.toUpperCase()) {
    case "FALL 2020":
      return "20201";
    case "WINTER 2021":
      return "20202";
    case "SPRING 2021":
      return "20203";
    case "SUMMER 2021":
      return "20204";
    default:
      return "20201";
  }
}

function classNameParser(className) {
  const spilter = className.split("-");
  return spilter[spilter.length - 1].trim();
}

const API = {
  getClasses: (quarter, className, success) => {
    console.log("hey I am called ", quarter, className);
    axios
      .get(`${baseURL}/classes/search`, {
        params: {
          quarter: quarterParser(quarter),
          subjectCode: classNameParser(className),
        },
        headers: {
          "ucsb-api-key": process.env.REACT_APP_ucsb_api_key,
        },
      })
      .then((res) => {
        console.log(res.data);
        success(res);
      });
  },
};

export default API;
