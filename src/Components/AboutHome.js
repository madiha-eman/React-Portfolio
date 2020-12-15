import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import { AboutInfo } from '../Info.json';
import girl from '../Images/girl.svg'

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5rem 1rem',
    textAlign: 'center',
    minHeight: window.innerHeight,
    position: 'relative',
    backgroung: 'black',
  },
  background: {
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: '90%',
    background:'black',

    zIndex: '-999',
  },
  title: {
    textAlign: 'center',
    paddingTop: '100px',
    fontWeight: 400,
    fontSize: '3em',
    color: 'lightgray',
  },
  subtitle: {
    fontWeight: 400,
    color: 'lightgray',
  },
  picture: {
    width: '100%',
  },
  img: {
    marginTop: '30px',
    width: '26rem',
    boxShadow: '0px 10px 10px 0px gray',
    borderRadius: '50%',
  },
  text: {
    textAlign: 'center',
    padding: '0 2rem',
    margin: '8rem auto 4rem auto',
    color: 'lightgray',
  },
  

}));

const AboutHome = () => {
  const classes = useStyles();
  const { about, } = AboutInfo;

  return (
    <Slide direction="up" in timeout={1000}>
      <Grid component="section" container className={classes.root}>
        <div className={classes.background} />
        <Grid item xs={12} md={6} className={classes.columnImg}>
          <Typography className={classes.title} variant="h2">
           {about.title}
            
          </Typography>
          <Typography className={classes.subtitle} variant="h5">
          <Typed strings={['Frontend Developer', 'Wordpress Developer']}   typeSpeed={40}
          backSpeed={50}
          loop/>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.columnImg}>
          <Grow in timeout={3000}>
            <picture className={classes.picture}>
              <img className={classes.img} src={girl} alt={about.key} />
            </picture>
          </Grow>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default AboutHome;
