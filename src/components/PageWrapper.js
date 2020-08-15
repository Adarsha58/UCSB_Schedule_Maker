import React, { Component } from "react";
import "../css/styles.css";
import { Container } from "@material-ui/core";
import logo from "../images/logo.png";
import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Footer from "./pages/common/footer";

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
  pageContainer: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#eeeeee",
    paddingBottom: "10vh",
  },
});

class PageWrapper extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.pageContainer}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <a href="/">
              <img src={logo} alt="logo" className={classes.logo} />
            </a>
            <a href="/">
              <Typography variant="h6" className={classes.title}>
                UCSB Schedule Maker
              </Typography>
            </a>
          </Toolbar>
        </AppBar>
        <div className={classes.contentWrap}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(useStyles)(PageWrapper);
