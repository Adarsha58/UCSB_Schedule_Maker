import React, { Component } from "react";
import "../../../css/styles.css";

class Field extends Component {
  render() {
    return (
      <div>
        <div className="formText">{this.props.name}</div>
        <input
          className="form-control inputText"
          id={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          required="required"
          name={this.props.name}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
        {this.props.errors && this.props.touched ? (
          <span className="errorMessageForm text-danger">{this.props.errors}</span>
        ) : (
          <span
            className="errorMessageForm"
            style={{ color: "rgba(365, 365, 365, 0)" }}
          >
            dummy text
          </span>
        )}
      </div>
    );
  }
}

export default Field;
