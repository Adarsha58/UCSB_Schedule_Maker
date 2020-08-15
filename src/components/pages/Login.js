import React, { Component } from "react";
import Field from "./common/Field";
import "../../css/styles.css";
import { withStyles } from "@material-ui/styles";
import { withFormik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import { Container, Typography, Paper, Grid } from "@material-ui/core";
import loginBg from "../../images/loginformlogo.png";

const field = [
  {
    name: "Username",
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
    marginTop: "2vh",
    marginBottom: "5vh",
  },
  loginForm: {
    position: "relative",
    background: "white",
    borderRadius: "15px",
    borderStyle: "double",
    border: "1px solid white",
    margin: "auto",
    padding: "5.2vh",
    width: "45vw",
    minHeight: "45vh",
    lineHeight: "3.4vh",
    flexDirection: "column",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
  },
  loginImage: {
    width: "45vw",
    height: "43vh",
    margin: "auto",
    display: "block",
  },
  button: {
    position: "absolute",
    bottom: "3.5vh",
    right: "5.2vh",
    width: "20%",
    height: "calc(0.7 * 7.3vh)",
  },
});

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loginContainer} id="login-container">
        <div className={classes.loginImage} id="login-image"></div>
        <form
          onSubmit={this.props.handleSubmit}
          className={classes.loginForm}
          id="login-form"
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
            id="form-button"
          >
            Login
          </Button>
        </form>
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
    Username: Yup.string()
      .max(15, "15 characters or less!")
      .min(4, "Minimum 4 characters required!")
      .required("Username is required!"),
    Password: Yup.string().required("Password is required!"),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    API.getClasses(values.UCSB_Net_ID, values.Password, (res) => {
      console.log("Result", res.data);
    });
  },
})(withStyles(useStyles)(Login));
