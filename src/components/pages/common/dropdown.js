import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import * as DropdownAction from "../../../store/actions/DropdownAction";

class Dropdown extends Component {
  render() {
    return (
      <div
        className={`${this.props.dropdownName}_dropdown`}
        style={{ marginBottom: "2.5vh" }}
      >
        <span className="dropdownNameText">{this.props.message}</span>
        <Select
          fullWidth
          style={{ minWidth: this.props.minWidth }}
          variant={this.props.variant}
          name={this.props.dropdownName}
          defaultValue={this.props.defaultValue}
          onChange={(event) =>
            this.props.handleChangeDropdown(
              event.target.value,
              this.props.dropdownName
            )
          }
        >
          {this.props.options.map((option, index) => {
            return (
              <MenuItem key={index} value={option} className="MenuItem">
                <span className="dropdownText">{option}</span>
              </MenuItem>
            );
          })}
        </Select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeDropdown: (dropdown_value, dropdown_name) => {
      dispatch(DropdownAction.dropdown_selected(dropdown_value, dropdown_name));
    },
  };
};

export default connect(null, mapDispatchToProps)(Dropdown);
