import React from 'react';
import { Button, Typography } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "1.5vh",
    paddingBottom: "1.5vh",
  },
  btn: {
    float: "right",
  },
  firstRow: {
    marginBottom: "2vh",
  },
  secondRow:{
    marginBottom: "0.75vh",
  },
  titleTypography: {
    fontFamily: "Noto Serif, serif",
  },
  iconWrap: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  },
  test: {
    display: "block",
  },
  subtitle2: {
    fontSize: theme.typography.subtitle2.fontSize,
  }
}));


function CourseFormater(props) {
  const classes = useStyles();
  return (
    <div className={`container-fluid ${classes.root}`}>
      <div className={`row ${classes.firstRow}`}>
        <div className="col-8">
          <Typography variant="h5" className={classes.titleTypography}>{props.courseTitle}</Typography>
        </div>
        <div className="col-4">
          <Button className="addToScheduleButton" variant="contained" color="secondary" className={classes.btn}>Add To Schedule</Button>
        </div>
      </div>
      <div className={`row ${classes.secondRow}`}>
        <div className="col-3">
          <Typography variant="h7" className={classes.iconWrap}>
            <DateRangeIcon />&nbsp;{props.days}
          </Typography>
        </div>
        <div className="col-3">
          <Typography variant="h7" className={classes.iconWrap}>
            <ScheduleIcon />&nbsp;{props.time}
          </Typography>
        </div>
        <div className="col-3">
          <Typography variant="h7" className={classes.iconWrap}>
            <LocationOnIcon/>&nbsp;{props.location}
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Typography variant="subtitle1">Enroll Code:&nbsp;<span className={classes.subtitle2}>{props.enrollCode}</span></Typography>
        </div>
        <div className="col-3">
          <Typography variant="subtitle1">&nbsp;&nbsp;Units:&nbsp;<span className={classes.subtitle2}>{props.units}</span></Typography>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Typography>Open Seats</Typography>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <Typography>{props.openSeats}</Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <Typography>{props.description}</Typography>
        </div>
      </div>
    </div>
  );

}

export default CourseFormater;
