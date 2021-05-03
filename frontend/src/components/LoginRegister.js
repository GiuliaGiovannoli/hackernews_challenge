import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link, useHistory, useParams } from "react-router-dom"
import Axios from 'axios'

import './styles.css'

import { LogInStatusContext } from '../context/LogInStatus'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function LoginRegister() {

  const classes = useStyles();

  const history = useHistory()

  const [logInStatus, setLogInStatus] = useContext(LogInStatusContext);

  //REGISTRATION
  const [userRegistrering, setUserRegistrering] = useState({
    usernameRegistrering: "",
    emailRegistrering: "",
    passwordRegistrering: ""
  })

  const handleOnChangeRegistrering = (e) => {
    setUserRegistrering({
      ...userRegistrering,
      [e.target.name]: e.target.value
    })
  }

  const submitRegistration = (e) => {
    e.preventDefault();
    if (userRegistrering.username !== '' && userRegistrering.email !== '' && userRegistrering.password !== '') {
      Axios.post('http://localhost:4000/api/users/register', {
        username: userRegistrering.usernameRegistrering,
        email: userRegistrering.emailRegistrering,
        password: userRegistrering.passwordRegistrering
      }).then((res) => {
        window.alert('You may now log in.')
        // you should empty the inputs !!
      })
      .catch((err) => {
        if(err) {
          window.alert('User already exists.')
          // you should empty the inputs !!
        }
      })
    }
    else {
      window.alert('Please fill all forms.')
    }
  }

  //LOG IN 
  const [userLogging, setUserLogging] = useState({
    emailLogging: "",
    passwordLogging: ""
  })

  const handleOnChangeLogging = (e) => {
    setUserLogging({
      ...userLogging,
      [e.target.name]: e.target.value
    })
  }

  const submitLogIn = (e) => {
    e.preventDefault();
    if (userLogging.email !== '' && userLogging.password !== '') {
      Axios.post('http://localhost:4000/api/users/login', {
        email: userLogging.email,
        password: userLogging.password
      }).then((res) => {
        const id = res.data.user._id
        /* window.alert('You are now logged in.') */
        history.push(`/user/${id}`)
        setLogInStatus(true)
      })
      .catch((err) => {
        if(err) {
          window.alert('Wrong credentials.')}
          // you should empty the inputs !!
      })
    } else {
      window.alert('Please fill all forms.')
    }
  }


  return (
    <>
    <Container component="main" maxWidth="s" id="column"
    style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'flex-start', color: '#3d84b8' }}>
      <CssBaseline />
      <div className={classes.paper} id="card"
      style={{ backgroundColor: '#eeeeee', textAlign: 'center', padding: '2%', borderRadius: '5%' }}>
        <Avatar className={classes.avatar} style={{ backgroundColor: '#3d84b8' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={9} sm={10}>
              <TextField
                autoComplete="usernameRegistrering"
                name="usernameRegistrering"
                required
                fullWidth
                id="usernameRegistrering"
                label="Username"
                onChange={handleOnChangeRegistrering}
              />
            </Grid>
            <Grid item xs={9} sm={10}>
              <TextField
                required
                fullWidth
                id="emailRegistrering"
                label="Email Address"
                name="emailRegistrering"
                autoComplete="emailRegistrering"
                onChange={handleOnChangeRegistrering}
              />
            </Grid>
            <Grid item xs={9} sm={10}>
              <TextField
                required
                fullWidth
                name="passwordRegistrering"
                label="Password"
                type="passwordRegistrering"
                id="passwordRegistrering"
                autoComplete="current-password"
                onChange={handleOnChangeRegistrering}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: '83%', backgroundColor: '#3d84b8' }}
            className={classes.submit}
            onClick={submitRegistration}
          >
            Sign Up
          </Button>
        </form>
      </div>


      <CssBaseline />
      <div className={classes.paper} id="card"
      style={{ backgroundColor: '#eeeeee', textAlign: 'center', padding: '2%', borderRadius: '5%' }}>
        <Avatar className={classes.avatar} style={{ backgroundColor: '#3d84b8' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleOnChangeLogging}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleOnChangeLogging}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ backgroundColor: '#3d84b8' }}
            onClick={submitLogIn}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>

    <CssBaseline />
    </>
  );
}