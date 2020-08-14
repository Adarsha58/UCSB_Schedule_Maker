import React, { Component } from "react";
import "../../../css/login.css";

class Field extends Component {
  render() {
    return (
      <div>
        <div className="formText">{this.props.name}</div>
        <input
          className="form-control inputText"
          id={this.props.name.split(" ").join("_")}
          type={this.props.type}
          placeholder={this.props.placeholder}
          required="required"
          name={this.props.name.split(" ").join("_")}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
        {this.props.errors && this.props.touched ? (
          <span className="errorMessageForm">{this.props.errors}</span>
        ) : <div style={{minHeight: "2vh"}} />}
      </div>
    );
  }
}

export default Field;
