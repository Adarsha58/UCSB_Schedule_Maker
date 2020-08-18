import React, { Component } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Dropdown from "../common/dropdown";
import TextFields from "../common/textField";
import * as courses from "../../../utils/coursesName";
import { connect } from "react-redux";

const dropdowns = [
  {
    dropdownName: "FindByFilter",
    message: "Find By: ",
    defaultValue: "Department",
    options: ["Department", "GE"],
    variant: "outlined",
    minWidth: "20vw",
  },
  {
    dropdownName: "Classes",
    message: "Subject Area: ",
    options: courses.classes,
    defaultValue: "Computer Science - CMPSC",
    variant: "outlined",
    minWidth: "40vw",
  },
  {
    dropdownName: "College",
    message: "College: ",
    options: ["Letter & Science", "Engineering", "Creative Studies"],
    variant: "outlined",
    minWidth: "20vw",
    defaultValue: "Engineering",
  },
  {
    dropdownName: "Area",
    message: "Area: ",
    options: ["LS", "COE", "Tomato", "Tamato"],
    variant: "outlined",
    minWidth: "15vw",
    defaultValue: "LS",
  },
];

const classes = (theme) => ({
  instructionContainer: {
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
  },
  topRow: {
    marginTop: "5vh",
  },
  secondRow: {
    marginTop: "3vh",
  },
  thirdRow: {
    marginTop: "2vh",
  },
});

class UserInstruction2 extends Component {
  render() {
    const { classes } = this.props;
    return (
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
            <div className="col col-md-auto" style={{ paddingLeft: "80.95vw" }}>
              <Button color="primary" size="large" variant="contained">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter_selected: state.DropdownReducer.dropdown_value_find_by_filter,
  };
};

export default connect(mapStateToProps)(withStyles(classes)(UserInstruction2));
