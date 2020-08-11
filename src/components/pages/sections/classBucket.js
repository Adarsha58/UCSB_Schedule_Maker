import React, { Component } from "react";
import { Paper, List, ListItemText, ListItem, Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

class ClassBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursesPicked: ["CMPSC 10", "CH E 110", "WRIT 100"],
    };
  }

  handleClear = (e) => {
    this.setState({ coursesPicked: [] });
  };

  render() {
    return (
      <Paper elevation={1} style={{ display: "inline-block" }}>
        <div className="icon-container" style={{}}>
          <AddShoppingCartIcon
            color="secondary"
            style={{ float: "left", marginRight: "35px" }}
          />
          <div
            className="icon-text"
            style={{ fontSize: "20px", marginLeft: "25px" }}
          >
            Classes Picked
          </div>
          <div className="classes-list" style={{ paddingLeft: "30px" }}>
            {this.state.coursesPicked.map((course, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText primary={course} />
                </ListItem>
              );
            })}
          </div>
          <div className="button-Container">
            <Button
              className="clear-button"
              size="medium"
              style={{
                float: "left",
                marginRight: "30px",
                background: "red",
                color: "white",
              }}
              onClick={this.handleClear}
            >
              Clear All
            </Button>
            <Button
              className="confirm-button"
              size="medium"
              style={{ background: "#008000", color: "white" }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

export default ClassBucket;
