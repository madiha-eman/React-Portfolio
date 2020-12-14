import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

import { ExperienceInfo, UrlIcons } from '../Info.json';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#97266D #97266D transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #97266D #97266D",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "13.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#97266D",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#97266D",
    padding: "7rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#97266D",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#97266D",
  },
  subtitle1: {
    color: "white",
  },
  para:{
    textTransform: 'lowercase'
  }
}));

const ExperienceHome = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
       Madiha EMAN
       <Typography align="center" className={classes.para}>
         madihaeman1@gmail.com
       </Typography>
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          EDUCATION
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
                        EDUCATION
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul><li>
             Matric(science) passed from Karachi Board(2013)</li>
             <li>
             Inter(I.com) passed from Intermediate Board(2015)</li>
             <li>
             Graduation (B.com) from Karachi University, Continue…</li> </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          SKILLS
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Web App Development
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
         
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
            <li> HTML</li>
            <li> CSS</li>
            <li> JavaScript</li>
            <li> ES6</li>
            <li>  ReactJs </li>
            <li>  BootStrap </li>
            <li> Wordpress</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          AWARDS
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            CERTIFICATION
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
           
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           <ul>
             <li>MS OFFICE (Professional)</li>
             <li>Web and Mobile App Development(continue) </li>
           </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          EXPERIANCE
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
                     No Experiance
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};




export default ExperienceHome;