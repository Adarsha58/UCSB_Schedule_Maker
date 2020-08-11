import React, { Component } from "react";
import { connect } from "react-redux";
import ClassFormater from "../common/classFormat";

class CourseSearched extends Component {
  render() {
    return (
      <div>
        <div>
          {typeof this.props.API_response === "undefined" ||
          Object.keys(this.props.API_response).length === 0 ? (
            <div>No Classes Found</div>
          ) : (
            <ClassFormater courses={this.props.API_response.classes} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    API_response: state.APIResponseReducer.response_api,
  };
};

export default connect(mapStateToProps)(CourseSearched);
