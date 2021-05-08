import React, { useState, useEffect, useContext } from 'react'
import { NavLink, Link, useHistory, useParams } from "react-router-dom"
import Axios from 'axios'

import CreatePost from './CreatePost'
import { UserInfosContext } from '../context/UserInfos'
import { LogInStatusContext } from '../context/LogInStatus'
import { ListOfPostsContext } from '../context/ListOfPosts'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
  },
});


export default function Posts() {

  const BACKEND_URL = process.env.REACT_APP_PROD_URL

  const classes = useStyles();

  const { category } = useParams()

  const [userInfos, setUserInfos] = useContext(UserInfosContext)

  const [logInStatus, setLogInStatus] = useContext(LogInStatusContext)

  const [posts, setPosts] = useState()

  const [listOfPosts, setListOfPosts] = useContext(ListOfPostsContext)


  function fetchingPosts() {
      fetch(`${BACKEND_URL}api/posts`)
                .then(res=> res.json())
                .then(json=> setPosts(json))
  }

  useEffect(() => {
    fetchingPosts()
  }, [])

  useEffect(() => {
    if(!category && posts && posts) {
      setListOfPosts(posts && posts)
    } else if(category) {
      const filteringPosts = posts && posts.filter((one) => one.category[0].includes(category) 
      || one.title.toLowerCase().includes(category.toLowerCase()))
      setListOfPosts(filteringPosts)}
  }, [category, posts])


  function handleLikes(post) {
    // step 1: if user likes a post  
    const checkPostsLiked = userInfos && userInfos.posts_liked.find((anyPost) => anyPost._id === post._id)
    if(!checkPostsLiked) {
    const likesNumber = { tot_likes: post.tot_likes + 1 }
    Axios.put(`${BACKEND_URL}api/posts/likes/${post._id}`, likesNumber)
      .then((res) => {
        let updatingList = listOfPosts && listOfPosts.map((anyPost) => { if(anyPost._id === res.data._id) { return {
          ...anyPost, tot_likes: res.data.tot_likes 
        }} else return anyPost})
        setListOfPosts(updatingList)
      }).catch((err) => {
        if(err) {console.log(err)}})
        //UPDATING USER INFOS
        const keyUser = localStorage.getItem('keyUser')
        const config = {headers: {'x-auth-token': `${keyUser}` }}
        Axios.put(`${BACKEND_URL}api/users/${userInfos && userInfos._id}`, 
        {posts_liked: [post, ...userInfos && userInfos.posts_liked]}, config )
        .then((res) => {
          setUserInfos({...userInfos && userInfos, posts_liked: [...userInfos && userInfos.posts_liked, post]})
          fetchingPosts()
        }).catch((err) => {
          if(err) {console.log(err)}})
        } 
        // step 2 if the user dislike a post
        else if (checkPostsLiked) {
          const likesNumber = { tot_likes: post.tot_likes - 1 }
          Axios.put(`${BACKEND_URL}api/posts/likes/${post && post._id}`, likesNumber)
            .then((res) => {
              let updatingList = listOfPosts && listOfPosts.map((anyPost) => { if(anyPost._id === res.data._id) { return {
                ...anyPost, tot_likes: res.data.tot_likes
              }} else return anyPost})
              setListOfPosts(updatingList)
            }).catch((err) => {
              if(err) {console.log(err)}})
              //UPDATING USER INFOS
              const keyUser = localStorage.getItem('keyUser')
              const config = {headers: {'x-auth-token': `${keyUser}` }}
              let updatingList = userInfos && userInfos.posts_liked.filter((anyPost) => {return anyPost._id !== post._id})
              Axios.put(`${BACKEND_URL}api/users/${userInfos && userInfos._id}`, 
              {posts_liked: updatingList}, config )
              .then((res) => {
                setUserInfos({...userInfos, posts_liked: updatingList})
                fetchingPosts()
              }).catch((err) => {
                if(err) {console.log(err)}})
              } 
  }


  return (
    <>

    { logInStatus && logInStatus ? 
    <CreatePost fetchingPosts={fetchingPosts} /> : null
    }

    <div style={{ display: 'flex', margin: '2% 15%', flexDirection:'column' }}>
    
    { listOfPosts && listOfPosts.length < 1 ? 
      (
      <div><p>No post found.</p>
      <NavLink to="/" id="linkStyle"><Button id="btn">Back</Button></NavLink></div>) 
      : null }
      
{      listOfPosts && listOfPosts.map((one) => {
      return(

        <Card className={classes.root} 
    style={{ textAlign: 'center', boxShadow: '0px 0px 0px 0px', marginBottom: '2%', border: '1px solid #eeeeee', padding: '0.5%' }}>
      <CardContent style={{ padding: 0 }}>
        <Typography className={classes.title} color="textPrimary" style={{ color: '#3d84b8', fontSize: '1.1rem', textTransform: 'uppercase' }}>
          {one && one.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" style={{ margin: 0 }}>
          {one && one.category[0]} 
          <br></br>
          Posted by {one && one.author.username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" style={{ margin: 0 }}>
          About: {one && one.about}
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
        <Button size="small" id="btn" target='blank' href={`${one && one.link}`}>Read here</Button>
        { logInStatus && logInStatus ? 
        <ThumbUpAltOutlinedIcon style={{ marginLeft: '10%' }} fontSize="large" 
        onClick={() =>{handleLikes(one)}} 
        className={ userInfos && userInfos.posts_liked.find(element => element._id === one._id) ? 'blue' : 'grey' } />
        : <p style={{ color: 'rgba(0, 0, 0, 0.54)' }}>likes:</p>
        }
        <p style={{ color: 'rgba(0, 0, 0, 0.54)' }}>{one && one.tot_likes}</p>
      </CardActions>
    </Card>

      )
    })
    }
    </div>
    </>
  );
}
