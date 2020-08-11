import React, { Component } from "react";
import Dropdown from "./common/dropdown";
import ClassBucket from "./sections/classBucket";
import PageWrapper from "../PageWrapper";
import CourseSearched from "./sections/CourseSearched";
import * as courses from "../../utils/coursesName";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as APIAction from "../../store/actions/API_response_action";

const dropdowns = [
  {
    dropdownName: "Quarter",
    options: ["Fall 2020", "Winter 2021", "Spring 2021", "Summer 2021"],
    defaultValue: "Fall 2020",
  },
  {
    dropdownName: "Classes",
    options: courses.classes,
    defaultValue: "Computer Science - CMPSC",
  },
];

class CourseSearch extends Component {
  render() {
    return (
      <PageWrapper>
        <div
          className="main-page-container"
          style={{ marginBottom: "500px", color: "white" }}
        >
          <div className="row1-header">
            <h1>MAKE YOUR OWN SCHEDULE!</h1>
          </div>
          <div className="search-container">
            <div
              className="dropdown-menu"
              style={{
                float: "left",
                marginRight: "250px",
              }}
            >
              {dropdowns.map((dropdown, index) => {
                return <Dropdown {...dropdown} key={index} />;
              })}
              <Button
                color="primary"
                variant="contained"
                size="small"
                style={{ marginTop: "25px" }}
                onClick={() =>
                  this.props.handleAPICall(
                    this.props.quarter_selected,
                    this.props.course_selected
                  )
                }
              >
                Search
              </Button>
            </div>
            <div className="classBucket">
              <ClassBucket />
            </div>
            <div className="ListAllClasses" style={{ marginTop: "200px" }}>
              {
                <CourseSearched
                  quarter={this.props.quarter_selected}
                  subjectArea={this.props.course_selected}
                  sytle={{ marginTop: "200px" }}
                />
              }
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quarter_selected: state.DropdownReducer.dropdown_value_quarter,
    course_selected: state.DropdownReducer.dropdown_value_courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAPICall: (quarter, className) => {
      dispatch(APIAction.API_CALL(quarter, className));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearch);
