import React, { Component } from "react";
import { connect } from "react-redux";
import CourseFormater from "../common/classFormater";

const test = {
  instructor: "Phill Conrad",
  rating: "5.0",
  courseTitle: "Advanced Applications Programming",
  days: "MW",
  time: "9:30 AM-10:45 AM",
  location: "Remote instruction",
  enrollCode: "62745",
  units: "4.0",
  openSeats: "5/72",
  description:
    "Advanced application programming using a high-level, virtual-machine-based language. Topics include generic programming, exception handling, automatic memory management, and application development, management, and maintenance tools, third-party library use, version control, software testing, issue tracking, code review, and working with legacy code.",
};

class CourseSearched extends Component {
  render() {
    return (
      <div>
        <div>
          {typeof this.props.API_response === "undefined" ||
          Object.keys(this.props.API_response).length === 0 ? (
            <div>No Classes Found</div>
          ) : (
            <CourseFormater {...test} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    API_response: state.APIResponseReducer.response_api,
  };
};

export default connect(mapStateToProps)(CourseSearched);
