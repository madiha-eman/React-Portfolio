/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Hidden from '@material-ui/core/Hidden';
import AboutHome from './AboutHome';
import ContactHome from './ContactHome';
import ProjectsHome from './ProjectsHome';
import ExperienceHome from './ExperienceHome';
import EducationHome from './EducationHome';
import { NavbarInfo } from '../Info.json';
import logo from './logo.png'

const useStyles = makeStyles({
  root: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    background: '#97266D',
    
  },
  title: {
    flexGrow: 1,
  },
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0.5rem',
    alignSelf: 'center',
    color:'white'
  },
  link: {
    color: '#97266D',
    fontSize: '0.9rem',
    width:'180px',
    marginTop: '40px'
  },
  img: {
    width: '7rem',
  },
  drawer: {
    zIndex: '999',
  },
  back:{
    background:'#97266D'

  },
  logo:{
 

  }
});

const Navbar = ({ setComponent }) => {
  const classes = useStyles();
  const { contact, experience, projects, education } = NavbarInfo;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleComponent = (Component) => {
    setComponent(<Component />);
  };

  const handleClose = (Component) => {
    if (Component != null) {
      setComponent(<Component />);
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar className={classes.root}>
          <Grid container className={classes.container}>
                   <Hidden smDown>
              <Divider orientation="vertical" flexItem />
              <Button
                onClick={() => handleComponent(ContactHome)}
                className={classes.navItem}
              >
                {contact}
              </Button>
            </Hidden>
            <Hidden xsDown>
              <Divider orientation="vertical" flexItem />
              <Button
                onClick={() => handleComponent(ProjectsHome)}
                className={classes.navItem}
              >
                {projects}
              </Button>
            </Hidden>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={() => handleComponent(AboutHome)}
              className={classes.navItem}
            >
              <HomeIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <Hidden xsDown>
              <Button
                onClick={() => handleComponent(ExperienceHome)}
                className={classes.navItem}
              >
                {experience}
              </Button>
              <Divider orientation="vertical" flexItem />
            </Hidden>
            <Hidden smDown>
              <Button
                onClick={() => handleComponent(EducationHome)}
                className={classes.navItem}
              >
                {education}
              </Button>
              <Divider orientation="vertical" flexItem />
            </Hidden>
          </Grid>
          <Hidden xsDown>
              <Button
              >

              </Button>
            </Hidden>
            <IconButton>
            <Avatar src={logo} className={classes.logo}/>

            </IconButton>
          
          <Hidden mdUp>
            <IconButton
              aria-label="open drawer"
              onClick={() => setDrawerOpen(!drawerOpen)}
              edge="start"
              className={classes.drawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => handleClose(null)}>
        <Button
          onClick={() => handleClose(ContactHome)}
          className={classes.link}
        >
          {contact}
        </Button>
        <Button
          onClick={() => handleClose(ProjectsHome)}
          className={classes.link}
        >
          {projects}
        </Button>
        <Button
          onClick={() => handleClose(ExperienceHome)}
          className={classes.link}
        >
          {experience}
        </Button>
        <Button
          onClick={() => handleClose(EducationHome)}
          className={classes.link}
        >
          {education}
        </Button>
      </Drawer>
    </>
  );
};

Navbar.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default Navbar;
