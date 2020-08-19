import React, { Component } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Dropdown from "../common/dropdown";
import TextFields from "../common/textField";
import * as courses from "../../../utils/coursesName";
import { connect } from "react-redux";
import * as APIAction from "../../../store/actions/API_response_action";
import CourseSearched from "../sections/APResponse";

const dropdowns = [
  {
    dropdownName: "FindByFilter",
    message: "Find By: ",
    defaultValue: "Department",
    options: ["Department", "GE"],
    variant: "outlined",
    minWidth: "20vw",
    fullWidth: true
  },
  {
    dropdownName: "Classes",
    message: "Subject Area: ",
    options: courses.classes,
    defaultValue: "Computer Science - CMPSC",
    variant: "outlined",
    minWidth: "40vw",
    fullWidth: true
  },
  {
    dropdownName: "College",
    message: "College: ",
    options: ["Letter & Science", "Engineering", "Creative Studies"],
    variant: "outlined",
    minWidth: "20vw",
    defaultValue: "Engineering",
    fullWidth: true
  },
  {
    dropdownName: "Area",
    message: "Area: ",
    options: ["LS", "COE", "Tomato", "Tamato"],
    variant: "outlined",
    minWidth: "15vw",
    defaultValue: "LS",
    fullWidth: true
  },
];

const classes = (theme) => ({
  instructionContainer: {
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
  },
  secondRow: {
    marginTop: "3vh",
  },
  thirdRow: {
    marginTop: "2vh",
  },
  topPaper: {
  
    marginLeft: "1vw",
    marginRight: "1vw",
    paddingTop: "5vh",
    marginTop: "2.5vh",
  }
});

class UserInstruction2 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.topPaper}>
      <div className={`container-fluid ${classes.instructionContainer}`}>
        <div className={`row ${classes.topRow}`}>
          <div className="col col-sm-auto">
            <Dropdown key={0} {...dropdowns[0]} />
          </div>

          {this.props.filter_selected === "Department" ? (
            <div className="col col-md-auto">
              <Dropdown key={1} {...dropdowns[1]} />
            </div>
          ) : (
              <div className="col col-md-auto">
                <Dropdown key={2} {...dropdowns[2]} />
              </div>
            )}
        </div>
        <div className={`row ${classes.secondRow}`}>
          <div className="col col-md-auto">
            {this.props.filter_selected === "GE" ? (
              <div className="col col-md-auto">
                <Dropdown key={3} {...dropdowns[3]} />
              </div>
            ) : null}
          </div>
        </div>
        <div className={`row ${classes.thirdRow}`}>
          {this.props.filter_selected === "Department" ? (
            <div className="col col-md-auto" style={{ paddingLeft: "79.95vw" }}>
              <Button color="primary" size="large" variant="contained"
                onClick={() =>
                  this.props.handleSearch(
                    this.props.quarter_selected,
                    this.props.course_selected
                  )
                }>
                Search
              </Button>
            </div>
          ) : (
              <div className="col col-md-auto">
                <Button color="primary" size="large" variant="contained">
                  Search
              </Button>
              </div>
            )}
        </div>
        <div className={`row ${classes.fourthRow}`}>
          <div className="col col-lg-auto">
            <Paper>
              <div className="ListAllClasses" style={{ marginTop: "200px" }}>
                {
                  <CourseSearched
                    quarter={this.props.quarter_selected}
                    subjectArea={this.props.course_selected}
                    sytle={{ marginTop: "200px" }}
                  />
                }
              </div>
            </Paper>
          </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (quarter, courseName) => { dispatch(APIAction.API_CALL(quarter, courseName)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(UserInstruction2));
