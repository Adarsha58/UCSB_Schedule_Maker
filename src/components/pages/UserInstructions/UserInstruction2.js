import React, { Component } from "react";
import { Paper, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Dropdown from "../common/dropdown";
import * as courses from "../../../utils/coursesName";
import { connect } from "react-redux";
import * as APIAction from "../../../store/actions/API_response_action";
import CourseFormater from "../common/classFormater";
import courseParser from "../../../utils/courseParser";
import filterRequired from "../../../utils/searchByGE";

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
    options: [
      "L&S - Letter & Science",
      "ENGR - Engineering",
      "CRST - Creative Studies",
    ],
    variant: "outlined",
    defaultValue: "ENGR - Engineering",
    fullWidth: true,
  },
  {
    dropdownName: "Area",
    message: "Area: ",
    options: [
      "Area A1 - English Reading and Composition",
      "Area A2 - English Reading and Composition",
      "Area B - Foreign Language (L&S Only)",
      "Area C - Science, Mathematics, and Technology (L&S Only)",
      "Area C - Science, Mathematics, and Technology (L&S Only)",
      "Area E - Culture and Though",
      "Area F - Arts",
      "Area G - Literature",
      "Area H - Foreign Language",
      "Area ETH - Ethnicity",
      "Area EUR - European Traditions",
      "Area NWC - World Cultures",
      "Area QNT - Quantitative Relationships",
      "Area WRT - Writing",
    ],
    variant: "outlined",
    minWidth: "25vw",
    defaultValue: "Area A1 - English Reading and Composition",
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
      <React.Fragment>
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
                      this.props.handleSearch(
                        this.props.quarter_selected,
                        "none",
                        this.props.level_selected,
                        this.props.college_selected,
                        this.props.area_selected
                      )
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
                      <span className={classes.searchResultTitle}>
                        Course#:
                      </span>
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-lg-12">
                    {filterRequired(
                      this.props.course_results.classes,
                      this.props.college_selected,
                      this.props.filter_selected
                    ).map((course) => {
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter_selected: state.DropdownReducer.dropdown_value_find_by_filter,
    quarter_selected: state.DropdownReducer.dropdown_value_quarter,
    course_selected: state.DropdownReducer.dropdown_value_courses,
    level_selected: state.DropdownReducer.dropdown_value_level,
    college_selected: state.DropdownReducer.dropdown_value_college,
    area_selected: state.DropdownReducer.dropdown_value_area,
    course_results: state.APIResponseReducer.response_api,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (quarter, courseName, level, college, area) => {
      console.log(quarter, courseName, level, college, area);
      dispatch(APIAction.API_CALL(quarter, courseName, level, college, area));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(classes)(UserInstruction2));
