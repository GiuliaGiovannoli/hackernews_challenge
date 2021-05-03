import React, { useState, useEffect, useContext } from 'react'
import { NavLink, useHistory, useParams } from "react-router-dom"

import './styles.css'
import { LogInStatusContext } from '../context/LogInStatus'
import { UserInfosContext } from '../context/UserInfos'

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));


export default function NavBar() {

  const classes = useStyles();

  function handleClick() {
    //
  }

  const [logInStatus, setLogInStatus] = useContext(LogInStatusContext)

  const [userInfos, setUserInfos] = useContext(UserInfosContext)


  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} style={{ backgroundColor: '#eeeeee' }}>
      <Button variant="outlined" size="small" id="btn" onClick={() => handleClick()}>
      <SearchIcon />
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          style={{ color: '#3d84b8', fontWeight: 'bold' }}
        >
        <NavLink to="/" id="linkStyle">
          HACKERNEWS
          </NavLink>
        </Typography>
        <Button variant="outlined" size="small" id="btn">
          {logInStatus && logInStatus ? 
            (userInfos && <NavLink to={`/user/${userInfos._id}`} id="linkStyle" style={{ color: '#eeeeee' }}>{userInfos.username}</NavLink>)
          : 
          (<NavLink to="/access" id="linkStyle"><PersonOutlineIcon style={{ color: '#eeeeee' }} /></NavLink>)
          }
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            // href={section.url}
            className={classes.toolbarLink}
          >
          some links 
          // maybe
          </Link>
        
      </Toolbar>
    </React.Fragment>
  );
}

