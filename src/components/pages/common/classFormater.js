import React, { Component } from "react";
import { Button, Typography, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Dropdown from "./dropdown";
// Icons
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import ScheduleIcon from "@material-ui/icons/Schedule";
import StarIcon from "@material-ui/icons/Star";

//APIs
import API from "../../../utils/API";

const useStyles = (theme) => ({
  root: {
    paddingTop: "4vh",
    paddingBottom: "2vh",
  },
  btn: {
    float: "right",
  },
  titleRow: {
    marginBottom: "1.7rem",
  },
  contentRow: {
    marginBottom: "0.35rem",
  },
  openSeatRow: {
    marginBottom: "0.9rem",
  },
  titleTypography: {
    fontFamily: "Noto Serif, serif",
  },
  iconWrap: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
});

const dropdowns = [
  {
    fullWidth: false,
    minWidth: "5rem",
    fontSize: "0.875rem",
  },
];

class CourseFormater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorOptionsSelectedIndex: 0,
    };
  }

  dropdownInstructorHandler = (index) => {
    this.setState({ instructorOptionsSelectedIndex: index });
  };

  render() {
    let currentDropdownIndex = this.state.instructorOptionsSelectedIndex;
    const { classes } = this.props;

    return (
      <div className={`container-fluid ${classes.root}`}>
        <div className={`row ${classes.titleRow}`}>
          <div className="col-8">
            <Typography variant="h5" className={classes.titleTypography}>
              {this.props.courseTitle}
            </Typography>
          </div>
          <div className="col-4">
            <Button
              className="addToScheduleButton"
              variant="contained"
              color="secondary"
              className={classes.btn}
            >
              Add To Schedule
            </Button>
          </div>
        </div>
        <div className={`row ${classes.contentRow}`}>
          <div className="col-6">
            <Typography variant="subtitle2" className={classes.iconWrap}>
              <Tooltip title="Instructors">
                <PersonIcon color="primary" />
              </Tooltip>
              &nbsp;
              <Dropdown
                {...dropdowns[0]}
                options={this.props.instructors}
                defaultValue={this.props.instructors[0]}
                dropdownName={this.props.courseId.trim()}
                onChangeHandler={this.dropdownInstructorHandler}
              />
            </Typography>
          </div>
          {this.props.instructors[currentDropdownIndex] === "No Preference" ? (
            <div className="col-3">
              <Typography variant="subtitle2">
                &nbsp;
                <span style={{ color: "#767676", fontWeight: "bold" }}>
                  Units:
                </span>
                &nbsp;{this.props.units}
              </Typography>
            </div>
          ) : null}
          {/* <div className="col-3">
            <Typography variant="subtitle2" className={classes.iconWrap}>
              <Tooltip title="Rate My Professor">
                <StarIcon color="primary" />
              </Tooltip>
              &nbsp;{this.state.professorRating}
            </Typography>
          </div> */}
        </div>
        {this.props.instructors[currentDropdownIndex] !== "No Preference" ? (
          <React.Fragment>
            <div className={`row ${classes.contentRow}`}>
              <div className="col-lg-3 col-4">
                <Typography variant="subtitle2" className={classes.iconWrap}>
                  <DateRangeIcon color="primary" />
                  &nbsp;{this.props.days[currentDropdownIndex]}
                </Typography>
              </div>
              <div className="col-lg-3 col-4">
                <Typography variant="subtitle2" className={classes.iconWrap}>
                  <ScheduleIcon color="primary" />
                  &nbsp;{this.props.time[currentDropdownIndex]}
                </Typography>
              </div>
              <div className="col-lg-3 col-4">
                <Typography variant="subtitle2" className={classes.iconWrap}>
                  <Tooltip title="Map Locations">
                    <LocationOnIcon color="primary" />
                  </Tooltip>
                  &nbsp;{this.props.locations[currentDropdownIndex]}
                </Typography>
              </div>
            </div>
            <div className={`row ${classes.contentRow}`}>
              <div className="col-3">
                <Typography variant="subtitle2">
                  <span style={{ color: "#767676", fontWeight: "bold" }}>
                    Enroll Code:
                  </span>
                  &nbsp;{this.props.enrollCode[currentDropdownIndex]}
                </Typography>
              </div>
              <div className="col-3">
                <Typography variant="subtitle2">
                  &nbsp;
                  <span style={{ color: "#767676", fontWeight: "bold" }}>
                    Units:
                  </span>
                  &nbsp;{this.props.units}
                </Typography>
              </div>
            </div>
            <div className={`row ${classes.contentRow} ${classes.openSeatRow}`}>
              <div className="col-12">
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", marginBottom: "-0.55rem" }}
                >
                  Open Seats
                </Typography>
                <Typography variant="subtitle2">
                  {this.props.openSeats[currentDropdownIndex]}
                </Typography>
              </div>
            </div>
          </React.Fragment>
        ) : null}
        <div className="row">
          <div className="col-11">
            <Typography variant="subtitle2">
              <p>{this.props.description}</p>
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(CourseFormater);
