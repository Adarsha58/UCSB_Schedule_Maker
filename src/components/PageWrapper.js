import React, { Component } from "react";
import "../css/main.css";

class PageWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav-Container">
          <h1>UCSB Schedule Maker</h1>
        </div>
        <div className="children-Container">{this.props.children}</div>
        <div className="footer-Container">
          <footer id="footer"></footer>
        </div>
      </React.Fragment>
    );
  }
}

export default PageWrapper;
