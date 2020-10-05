import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import { connect } from "react-redux";
import courseParser from "../../../utils/courseParser";

class UserInstruction3 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <span className="scheduleTitle">YOUR CLASSES</span>
          </div>
        </div>
        <Paper>
          <div className="row">
            <div className="col-sm-12 col-lg-10">
              {
                this.props.selected_classes.map( (course, index) => {
                  return(
                    <div key={index}>{JSON.stringify(course)}</div>
                  );
                })
              }
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected_classes: state.ScheduleButtonReducer.selected_classes,
  };
};

export default connect(mapStateToProps)(UserInstruction3);
