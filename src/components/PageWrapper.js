import React, { Component } from "react";
import "../css/main.css";
import { Container } from "@material-ui/core";
import logo from "../images/logo.png";
import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = (theme) => ({
  navbar: {
    backgroundColor: "black",
  },
  logo: {
    marginRight: "0.7vw",
    marginLeft: "-1vw",
    maxHeight: "50px",
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontWeight: "bold",
    fontSize: "1.35em",
    fontFamily: "Open Sans Condensed, sans-serif",
  },
});

class PageWrapper extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{height: "100%"}}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography variant="h6" className={classes.title}>
              UCSB Schedule Maker
            </Typography>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(useStyles)(PageWrapper);
