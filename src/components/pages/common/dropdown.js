import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import * as DropdownAction from "../../../store/actions/DropdownAction";

class Dropdown extends Component {
  render() {
    return (
      <div className={`${this.props.dropdownName}_dropdown`}>
        <span>{this.props.message}</span>
        <Select
          className="dropdown"
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
              <MenuItem key={index} value={option}>
                {option}
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
