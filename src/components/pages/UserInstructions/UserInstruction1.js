import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Dropdown from "../common/dropdown";
import "../../../css/styles.css";

const dropdowns = [
  {
    dropdownName: "Level",
    message: "Choose your Level: ",
    options: ["Undergraduate", "Graduate"],
    defaultValue: "Undergraduate",
  },
  {
    dropdownName: "Quarter",
    message: "Quarter: ",
    options: ["Fall 2020", "Winter 2021", "Spring 2021", "Summer 2021"],
    defaultValue: "Fall 2020",
  },
];

const classes = (theme) => ({
  instructionContainer: {
    marginTop: "5%",
    dispaly: "inline-block",
  },
});

class UserInstruction1 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={`container-fluid ${classes.instructionContainer}`}>
        <div className="row">
          <div className="col">
            <div className="welcomeText">Let's get started!</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {dropdowns.map((dropdown, index) => {
              return <Dropdown {...dropdown} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(classes)(UserInstruction1);
