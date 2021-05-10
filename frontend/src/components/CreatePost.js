import React, { useState, useEffect, useContext } from 'react'
import { NavLink, Link, useHistory, useParams } from "react-router-dom"
import Axios from 'axios'
import isUrl from 'is-url'

import { UserInfosContext } from '../context/UserInfos'
import { LogInStatusContext } from '../context/LogInStatus'
import { ListOfPostsContext } from '../context/ListOfPosts'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

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


export default function LoginRegister({fetchingPosts}) {

  const BACKEND_URL = process.env.REACT_APP_PROD_URL

  const classes = useStyles()

  const history = useHistory()

  const today = new Date()

  const [logInStatus, setLogInStatus] = useContext(LogInStatusContext)

  const [userInfos, setUserInfos] = useContext(UserInfosContext)

  const [post, setPost] = useState({
    title: '',
    link: '',
    date_published: today,
    about: '',
    author: localStorage.getItem('idUser'),
    category: ''
  })

  const [listOfPosts, setListOfPosts] = useContext(ListOfPostsContext)

  const handleOnChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const handleOnChecked = (categoryName) => {
    setPost({
      ...post,
      category: categoryName
    })
  }

  const submitPublish = (e) => {
    e.preventDefault()
    if (post.title !== '' && post.link !== '' && post.about !== '' && post.category !== '') {
      if(isUrl(post && post.link)) {
        setPost({
          ...post,
          link: post && post.link
        })
      if(logInStatus && logInStatus) {
        const keyUser = localStorage.getItem('keyUser')
        const config = {headers: {'x-auth-token': `${keyUser}` }}
        const newPost = {
          title: post && post.title,
          link: post && post.link,
          date_published: post && post.date_published,
          author: post && post.author,
          about: post && post.about,
          tot_likes: 0,
          category: post && post.category }
        Axios.post(`${BACKEND_URL}api/posts`, 
        newPost, config)
        .then((res) => {
        setListOfPosts([
          res.data,
          ...listOfPosts
        ])
        fetchingPosts()
        // you should empty the inputs !!
      }).catch((err) => {
        if(err) {
          console.log(err)
          window.alert('Post already exists.')
          // you should empty the inputs !! 
        }})
    }} else {
      window.alert('Please enter a valid link (example: https://thehackernews.com/).')
    }} else {
      window.alert('Please fill all forms.')}
  }


  return (
    <>
    <Container component="main" maxWidth="s" style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
      <div className={classes.paper}
      style={{ backgroundColor: '#eeeeee', textAlign: 'center', padding: '1%', borderRadius: '2%', margin: 0, width: '60%' }}>
        <Typography component="h6" variant="h6" 
        style={{ textAlign: 'center', color: '#395697', fontWeigth: 'bold', fontSize: '1.1rem', textTransform: 'uppercase' }}>
          <h4>POST YOUR ARTICLE</h4>
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
            style={{ margin: 0 }}
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
            style={{ margin: 0 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="about"
            label="About"
            name="about"
            autoComplete="about"
            autoFocus
            onChange={handleOnChange}
            style={{ margin: 0 }}
          />
          <div>
          <p style={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: '1.1rem', textAlign: 'left' }}>Choose the correct category*</p>
          <div style={{ display: 'flex', alignItems: 'baseline'   }}>
      <CheckBoxOutlinedIcon fontSize={'medium'} className={post.category.includes('Cyber attacks') ? 'blue' : 'grey'} 
      onClick={() => handleOnChecked('Cyber attacks')} /><p style={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: '1.1rem', marginRight: '2%' }}>Cyber attacks</p>   
      <CheckBoxOutlinedIcon fontSize={'medium'} className={post.category.includes('Cyber security') ? 'blue' : 'grey'} 
      onClick={() => handleOnChecked('Cyber security')}/><p style={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: '1.1rem', marginRight: '2%' }}>Cyber security</p>   
      <CheckBoxOutlinedIcon fontSize={'medium'} className={post.category.includes('Data breaches') ? 'blue' : 'grey'} 
      onClick={() => handleOnChecked('Data breaches')}/><p style={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: '1.1rem', marginRight: '2%' }}>Data breaches</p>  
      <CheckBoxOutlinedIcon fontSize={'medium'} className={post.category.includes('Vulnerabilities') ? 'blue' : 'grey'} 
      onClick={() => handleOnChecked('Vulnerabilities')}/><p style={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: '1.1rem', marginRight: '2%' }}>Vulnerabilities</p>  
      <CheckBoxOutlinedIcon fontSize={'medium'} className={post.category.includes('Malware') ? 'blue' : 'grey'} 
      onClick={() => handleOnChecked('Malware')}/><p style={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: '1.1rem', marginRight: '2%' }}>Malware</p> 
      </div>
      <hr></hr>
    </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ backgroundColor: '#395697' }}
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




