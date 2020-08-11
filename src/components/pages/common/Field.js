import React, { Component } from "react";
import "../../../css/login.css";

class Field extends Component {
  render() {
    return (
      <div className="form-group">
        <div className="row">
          <h1>{this.props.name}</h1>
        </div>
        <input
          className="form-control"
          id={this.props.name.split(" ").join("_")}
          type={this.props.type}
          placeholder={this.props.placeholder}
          required="required"
          name={this.props.name.split(" ").join("_")}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
        {this.props.errors && this.props.touched ? (
          <span>{this.props.errors}</span>
        ) : null}
      </div>
    );
  }
}

export default Field;
