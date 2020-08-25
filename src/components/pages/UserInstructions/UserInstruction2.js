import React, { Component } from "react";
import { Paper, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Dropdown from "../common/dropdown";
import * as courses from "../../../utils/coursesName";
import { connect } from "react-redux";
import * as APIAction from "../../../store/actions/API_response_action";
import CourseFormater from "../common/classFormater";
import courseParser from "../../../utils/courseParser";

const dropdowns = [
  {
    dropdownName: "FindByFilter",
    message: "Find By: ",
    defaultValue: "Department",
    options: ["Department", "GE"],
    variant: "outlined",
    minWidth: "20vw",
    fullWidth: true,
  },
  {
    dropdownName: "Classes",
    message: "Subject Area: ",
    options: courses.classes,
    defaultValue: "Computer Science - CMPSC",
    variant: "outlined",
    fullWidth: true,
  },
  {
    dropdownName: "College",
    message: "College: ",
    options: ["Letter & Science", "Engineering", "Creative Studies"],
    variant: "outlined",
    defaultValue: "Engineering",
    fullWidth: true,
  },
  {
    dropdownName: "Area",
    message: "Area: ",
    options: ["LS", "COE", "Tomato", "Tamato"],
    variant: "outlined",
    minWidth: "25vw",
    defaultValue: "LS",
    fullWidth: true,
  },
];

const classes = (theme) => ({
  instructionContainer: {
    width: "100%",
  },
  row: {
    marginTop: "2.5vh",
  },
  fourthRow: {
    marginTop: "2.5vh",
  },
  topPaper: {
    marginLeft: "1vw",
    marginRight: "1vw",
    paddingTop: "5vh",
    marginTop: "2.5vh",
  },
  coursePaper: {
    marginBottom: "3vh",
    backgroundColor: "#FFFAF0",
    borderRadius: "10px",
  },
  serachResultTitle: {
    fontSize: "10em",
  },
});

class UserInstruction2 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.topPaper} elevation={1}>
        <div className={`container-fluid ${classes.instructionContainer}`}>
          <div className={`row ${classes.row}`}>
            <div className="col-lg-6">
              <Dropdown key={0} {...dropdowns[0]} />
            </div>

            {this.props.filter_selected === "Department" ? (
              <div className="col-lg-6">
                <Dropdown key={1} {...dropdowns[1]} />
              </div>
            ) : (
              <div className="col-lg-6">
                <Dropdown key={2} {...dropdowns[2]} />
              </div>
            )}
          </div>

          <div className={`row ${classes.row} justify-content-center`}>
            <div className="col-lg-3">
              {this.props.filter_selected === "GE" ? (
                <Dropdown key={3} {...dropdowns[3]} />
              ) : null}
            </div>
          </div>
          <div className={`row ${classes.row} ${classes.thirdRow}`}>
            {this.props.filter_selected === "Department" ? (
              <div className="col-lg-12">
                <Button
                  color="primary"
                  size="large"
                  style={{ float: "right" }}
                  variant="contained"
                  onClick={() =>
                    this.props.handleSearch(
                      this.props.quarter_selected,
                      this.props.course_selected,
                      this.props.level_selected,
                      "none",
                      "none"
                    )
                  }
                >
                  Search
                </Button>
              </div>
            ) : (
              <div className="col-lg-7">
                <Button
                  style={{ float: "right" }}
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={() =>
                    // this.props.handleSearch(
                    //   this.props.quarter_selected,
                    //   this.props.course_selected,
                    //   this.props.level_selected
                    // )
                    {}
                  }
                >
                  Search
                </Button>
              </div>
            )}
          </div>

          <div className={`row ${classes.row} ${classes.fourthRow}`}>
            {Object.keys(this.props.course_results).length === 0 &&
            this.props.course_results.constructor === Object ? null : (
              <React.Fragment>
                <div className="col-6">
                  <span className={classes.searchResultTitle}>
                    &nbsp;Search Results:&nbsp;
                    {this.props.course_results.total}
                  </span>
                </div>
                <div className="col-6">
                  <div className="search-bar" style={{ float: "right" }}>
                    <span className={classes.searchResultTitle}>Course#:</span>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="col-lg-12">
                  {this.props.course_results.classes.map((course) => {
                    return (
                      <Paper
                        variant="outlined"
                        elevation={5}
                        key={course.courseId}
                        className={classes.coursePaper}
                      >
                        <CourseFormater
                          {...courseParser(course)}
                          courseId={course.courseId}
                        />
                      </Paper>
                    );
                  })}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter_selected: state.DropdownReducer.dropdown_value_find_by_filter,
    quarter_selected: state.DropdownReducer.dropdown_value_quarter,
    course_selected: state.DropdownReducer.dropdown_value_courses,
    level_selected: state.DropdownReducer.dropdown_value_level,
    course_results: state.APIResponseReducer.response_api,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (quarter, courseName, level) => {
      dispatch(APIAction.API_CALL(quarter, courseName, level));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(classes)(UserInstruction2));
