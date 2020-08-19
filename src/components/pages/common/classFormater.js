import React from "react";
import { Button, Typography, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dropdown from "./dropdown";
// Icons
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import ScheduleIcon from "@material-ui/icons/Schedule";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
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
}));

const dropdowns = [
  {
    dropdownName: "Instructor",
    defaultValue: "No preference",
    options: ["Conrad", "No preference", "Mirza", "Adarsha"],
    fullWidth: false,
    minWidth: "5rem",
    fontSize: "0.875rem",
  },
];

function CourseFormater(props) {
  const classes = useStyles();
  return (
    <div className={`container-fluid ${classes.root}`}>
      <div className={`row ${classes.titleRow}`}>
        <div className="col-8">
          <Typography variant="h5" className={classes.titleTypography}>
            {props.courseTitle}
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
            <Dropdown {...dropdowns[0]} />
          </Typography>
        </div>
        <div className="col-3">
          <Typography variant="subtitle2" className={classes.iconWrap}>
            <Tooltip title="Rate My Professor">
              <StarIcon color="primary" />
            </Tooltip>
            &nbsp;{props.rating}
          </Typography>
        </div>
      </div>
      <div className={`row ${classes.contentRow}`}>
        <div className="col-3">
          <Typography variant="subtitle2" className={classes.iconWrap}>
            <DateRangeIcon color="primary" />
            &nbsp;{props.days}
          </Typography>
        </div>
        <div className="col-3">
          <Typography variant="subtitle2" className={classes.iconWrap}>
            <ScheduleIcon color="primary" />
            &nbsp;{props.time}
          </Typography>
        </div>
        <div className="col-3">
          <Typography variant="subtitle2" className={classes.iconWrap}>
            <Tooltip title="Map Locations">
              <LocationOnIcon color="primary" />
            </Tooltip>
            &nbsp;{props.location}
          </Typography>
        </div>
      </div>
      <div className={`row ${classes.contentRow}`}>
        <div className="col-3">
          <Typography variant="subtitle2">
            <span style={{color: "#767676", fontWeight: "bold"}}>Enroll Code:</span>&nbsp;{props.enrollCode}
          </Typography>
        </div>
        <div className="col-3">
          <Typography variant="subtitle2">
            &nbsp;<span style={{color: "#767676", fontWeight: "bold"}}>Units:</span>&nbsp;{props.units}
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
          <Typography variant="subtitle2">5 Unreserved Seats</Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-11">
          <Typography variant="subtitle2">
            <p>{props.description}</p>
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-11">
          <hr className="border border-primary" />
        </div>
      </div>
    </div>
  );
}

export default CourseFormater;
