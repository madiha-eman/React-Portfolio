import React from 'react';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { EducationInfo } from '../Info.json';
import girl from '../Images/girl2.jpg'

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5rem 1rem',
    textAlign: 'center',
    minHeight: window.innerHeight - 109,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'black',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: '-999',
  },
  title: {
    fontWeight: 400,
    fontSize: '3em',
    margin: '1rem',
    color: 'whitesmoke'
  },
  subtitle: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '1rem',
    color: 'black',
  },
  picture: {
    width: '100%',
  },
  img: {
    boxShadow: '0px 10px 15px 5px gray',
    maxHeight: '20rem',
    maxWidth: '90%',
    margin: '1rem',
  },
  article: {
    padding: '3rem 0',
    color: 'white',
    fontSize: '12px'

  },
  h6:{
    fontSize: '12px'

  },
  columnImg: {
    padding: '1rem 1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: '1rem',
    display: 'flex',
  },
}));

const EducationHome = () => {
  const classes = useStyles();
  const { title, text } = EducationInfo;
  return (
    <Slide direction="up" in timeout={1000}>
            <Grid component="section" container className={classes.root}>
        <div className={classes.background} />
        <Grid item xs={12} md={12}>
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
        </Grid>
          <Grid item xs={12} md={6} component="article" className={classes.article}>
            <Typography variant="body1">
              {text}
            </Typography>
            </Grid>
            <Grid item xs={12} md={6} >
            <Grow in timeout={3000}>
              <picture className={classes.picture}>
                <img className={classes.img} src={girl} alt='girl' />
              </picture>
            </Grow>
          </Grid>
          </Grid>
    </Slide>
  );
};

export default EducationHome;
