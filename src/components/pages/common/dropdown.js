import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import * as DropdownAction from "../../../store/actions/DropdownAction";

class Dropdown extends Component {
  render() {
    const classes = this.props;
    return (
      <div className={`${this.props.dropdownName}_dropdown`}>
        {this.props.message ? (
          <span className="dropdownNameText">{this.props.message}</span>
        ) : null}
        <Select
          fullWidth={this.props.fullWidth}
          style={{
            minWidth: this.props.minWidth,
          }}
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
              <MenuItem
                key={index}
                data-index={index.toString()}
                value={option}
                className="MenuItem"
                onClick={
                  this.props.onChangeHandler
                    ? (e) => this.props.onChangeHandler(index)
                    : null
                }
              >
                <span style={{ fontSize: this.props.fontSize }}>{option}</span>
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
