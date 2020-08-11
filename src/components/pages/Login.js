import React, { Component } from "react";
import Field from "./common/Field";
import "../../css/login.css";
import "../../css/main.css";
import { withFormik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";

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

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="titles">
          <div className="smalltitle ucsb">UCSB</div>
          <div className="bigtitle">Schedule</div>
          <div className="smalltitle maker">Maker</div>
        </div>
        <div className="login-form">
          <form className="form-group" onSubmit={this.props.handleSubmit}>
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
            <div className="home-button">
              <Button
                type="sumbit"
                variant="contained"
                color="secondary"
                size="medium"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
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
      .max(15, "15 characters or less")
      .required("UCSB Net Id is required"),
    Password: Yup.string().required("Password is required"),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    API.getClasses(values.UCSB_Net_ID, values.Password, (res) => {
      console.log("Result", res.data);
    });
  },
})(Login);
