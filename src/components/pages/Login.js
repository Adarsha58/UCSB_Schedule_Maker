import React, { Component } from "react";
import Field from "./common/Field";
import "../../css/login.css";
import "../../css/main.css";
import { withStyles } from "@material-ui/styles";
import { withFormik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import { Container, Typography, Paper, Grid } from "@material-ui/core";
import ucsbImage from "../../images/login-background.jpg";

const field = [
  {
    name: "UCSB Net ID",
    placeholder: "Enter your username...",
    type: "text",
  },
  {
    name: "Password",
    placeholder: "Enter your password...",
    type: "password",
  },
];

const useStyles = (theme) => ({
  loginContainer: {
    backgroundColor: "rgb(24, 39, 56)",
    padding: "6vh",
    height: "100%",
    width: "100%"
  },
  loginForm: {
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "5px",
    borderStyle: "double",
    border: "1px solid white",
    margin: "auto",
    padding: "2em",
    overflow: "hidden",
    paddingBottom: "1em",
    width: "45vw",
    height: "40vh",
  },
  button: {
    marginTop: "0.35vw",
    float: "right",
  },
});

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loginContainer}>
        <Container
          onSubmit={this.props.handleSubmit}
          className={classes.loginForm}
        >
          {field.map((field, index) => {
            return (
              <Field
                {...field}
                key={index}
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
                value={this.props.values[field.name]}
                errors={this.props.errors[field.name]}
                touched={this.props.touched[field.name]}
              />
            );
          })}
          <Button
            type="sumbit"
            variant="contained"
            color="secondary"
            size="medium"
            className={classes.button}
          >
            Login
          </Button>
        </Container>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    UCSB_Net_ID: "",
    Password: "",
  }),
  validationSchema: Yup.object().shape({
    UCSB_Net_ID: Yup.string()
      .max(15, "*15 characters or less")
      .required("*UCSB Net Id is required"),
    Password: Yup.string().required("*Password is required"),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    API.getClasses(values.UCSB_Net_ID, values.Password, (res) => {
      console.log("Result", res.data);
    });
  },
})(withStyles(useStyles)(Login));
