import React, { Component } from "react";
import { connect } from "react-redux";

class CourseSearched extends Component {
  render() {
    return (
      <div>
        <div>
          <pre>{JSON.stringify(this.props.API_response, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    API_response: state.APIResponseReducer.response_api.classes,
  };
};

export default connect(mapStateToProps)(CourseSearched);
