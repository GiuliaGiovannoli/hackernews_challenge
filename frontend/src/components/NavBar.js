import React, { useState, useEffect, useContext } from 'react'
import { NavLink, useHistory, useParams } from "react-router-dom"
import Axios from 'axios'

import { LogInStatusContext } from '../context/LogInStatus'
import { UserInfosContext } from '../context/UserInfos'

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Popover from '@material-ui/core/Popover';
import InputBase from '@material-ui/core/InputBase';

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
  typography: {
    padding: theme.spacing(2),
  },
}));


export default function NavBar() {

  const BACKEND_URL = process.env.REACT_APP_PROD_URL

  const classes = useStyles();

  const history = useHistory()

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [logInStatus, setLogInStatus] = useContext(LogInStatusContext)

  const [userInfos, setUserInfos] = useContext(UserInfosContext)

  const handleLogInStatus = () => {
    if(localStorage.getItem('logInStatus')) {
      setLogInStatus(true)
    }
  }
  
  useEffect(() => {
    handleLogInStatus()
    if(logInStatus && logInStatus) {
      const idUser = localStorage.getItem('idUser')
      const keyUser = localStorage.getItem('keyUser')
      if(idUser) {
        const config = {headers: {'x-auth-token': `${keyUser}` }}
        Axios.get(`${BACKEND_URL}api/users/${idUser}`, config)
        .then((res) => {
        setUserInfos(res.data)
      }).catch((err) => {
        if(err) {
          console.log(err)
        }})
    }
    }
  }, [logInStatus])


  const [inputSaved, setInputSaved] = useState('')

  const saveInput= () => {
    setInputSaved(document.querySelector('#input').value)
  }

  const handleKeyPress = (e) => {
    if(inputSaved && inputSaved){
    if (e.key === 'Enter') {
      history.push(`/${inputSaved}`)
      setAnchorEl(null)
    }}
  }


  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} style={{ backgroundColor: '#3d84b8' }}>
      <Button aria-describedby={id} variant="outlined" size="small" id="btn" onClick={handleClick}>
      <SearchIcon style={{ color: '#3d84b8' }} />
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          style={{ color: '#eeeeee', fontWeight: 'bold' }}
        >
        <NavLink to="/" id="linkStyle">
          HACKERNEWS
          </NavLink>
        </Typography>
        {<NavLink to={logInStatus && logInStatus ?  `access/user/${userInfos && userInfos._id}` : '/access/users'} id="linkStyle" style={{ color: '#3d84b8' }}>
        <Button variant="outlined" size="small" id="btn">
        {logInStatus && logInStatus ? `${userInfos && userInfos.username}` : <PersonOutlineIcon style={{ color: '#3d84b8', backgroundColor: '#eeeeee' }}/> }
        </Button>
        </NavLink>
        }
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <NavLink to="/Cyber attacks" id='linkStyle'><Link style={{ textTransform: 'uppercase', color: '#3d84b8' }} noWrap id='linkStyle' variant="body2" className={classes.toolbarLink}>
          Cyber attacks </Link></NavLink>
          <NavLink to="/Cyber security" id='linkStyle'><Link style={{ textTransform: 'uppercase', color: '#3d84b8' }} noWrap id='linkStyle' variant="body2" className={classes.toolbarLink}>
          Cyber security </Link></NavLink>
          <NavLink to="/Data breaches" id='linkStyle'><Link style={{ textTransform: 'uppercase', color: '#3d84b8' }} noWrap id='linkStyle' variant="body2" className={classes.toolbarLink}>
          Data breaches </Link></NavLink>
          <NavLink to="/Vulnerabilities" id='linkStyle'><Link style={{ textTransform: 'uppercase', color: '#3d84b8' }} noWrap id='linkStyle' variant="body2" className={classes.toolbarLink}>
          Vulnerabilities </Link></NavLink>
          <NavLink to="/Malware" id='linkStyle'><Link style={{ textTransform: 'uppercase', color: '#3d84b8' }} noWrap id='linkStyle' variant="body2" className={classes.toolbarLink}>
          Malware </Link></NavLink>
      </Toolbar>
      <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <InputBase
        id="input"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={saveInput}
              onKeyPress={handleKeyPress}
            />
      </Popover>
    </div>
    </React.Fragment>
  )
}




