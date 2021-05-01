import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import './styles.css'

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

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const submitRegister = (e) => {
    e.preventDefault();
    if (user.username !== '' && user.email !== '' && user.password !== '') {
      //
    }
    else {
      window.alert('Please fill all forms.')
    }
  }


  return (
    <>
    <Container component="main" maxWidth="s" id="column"
    style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'flex-start', color: '#91091e' }}>
      <CssBaseline />
      <div className={classes.paper} id="card"
      style={{ backgroundColor: '#fcecdd', textAlign: 'center', padding: '2%', borderRadius: '5%' }}>
        <Avatar className={classes.avatar} style={{ backgroundColor: '#91091e' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={9} sm={10}>
              <TextField
                autoComplete="username"
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={9} sm={10}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={9} sm={10}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: '83%', backgroundColor: '#91091e' }}
            className={classes.submit}
            onClick={submitRegister}
          >
            Sign Up
          </Button>
        </form>
      </div>


      <CssBaseline />
      <div className={classes.paper} id="card"
      style={{ backgroundColor: '#fcecdd', textAlign: 'center', padding: '2%', borderRadius: '5%' }}>
        <Avatar className={classes.avatar} style={{ backgroundColor: '#91091e' }}>
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ backgroundColor: '#91091e' }}
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