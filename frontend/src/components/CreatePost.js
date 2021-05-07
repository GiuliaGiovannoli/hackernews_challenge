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

  const classes = useStyles()

  const history = useHistory()

  const [logInStatus, setLogInStatus] = useContext(LogInStatusContext)

  const [userInfos, setUserInfos] = useContext(UserInfosContext)

  const [post, setPost] = useState({
    title: '',
    link: '',
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
          author: post && post.author,
          about: post && post.about,
          tot_likes: 0,
          category: post && post.category }
        Axios.post("http://localhost:4000/api/posts", 
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
              <div>
              <p>Choose the correct category</p>
      <CheckBoxOutlinedIcon fontSize={'large'} className={post.category.includes('Cyber attacks') ? 'blue' : 'grey'} onClick={() => handleOnChecked('Cyber attacks')}/>Cyber attacks   
      <CheckBoxOutlinedIcon fontSize={'large'} className={post.category.includes('Cyber security') ? 'blue' : 'grey'} onClick={() => handleOnChecked('Cyber security')}/>Cyber security   
      <CheckBoxOutlinedIcon fontSize={'large'} className={post.category.includes('Data breaches') ? 'blue' : 'grey'} onClick={() => handleOnChecked('Data breaches')}/>Data breaches   
      <CheckBoxOutlinedIcon fontSize={'large'} className={post.category.includes('Vulnerabilities') ? 'blue' : 'grey'} onClick={() => handleOnChecked('Vulnerabilities')}/>Vulnerabilities   
      <CheckBoxOutlinedIcon fontSize={'large'} className={post.category.includes('Malware') ? 'blue' : 'grey'} onClick={() => handleOnChecked('Malware')}/>Malware   
    </div>
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ backgroundColor: '#3d84b8' }}
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




