import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import './styles.css'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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

  const submitPublish = (e) => {
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
    <Container component="main" maxWidth="s" style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
      <div className={classes.paper}
      style={{ backgroundColor: '#fcecdd', textAlign: 'center', padding: '1%', borderRadius: '6%', margin: 0 }}>
        <Typography component="h6" variant="h6">
          Post your article
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            onChange={handleOnChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="link"
            label="Link"
            type="link"
            id="link"
            autoComplete="link"
            onChange={handleOnChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ backgroundColor: '#91091e' }}
            onClick={submitPublish}
          >
            Publish
          </Button>
        </form>
      </div>
    </Container>

    <CssBaseline />
    </>
  );
}