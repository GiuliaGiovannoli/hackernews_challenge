import React, { useState, useEffect, useContext } from 'react'
import { NavLink, Link, useHistory, useParams } from "react-router-dom"

import CreatePost from './CreatePost'
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
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function Posts() {

  const classes = useStyles();

  const { category } = useParams()

  const [logInStatus, setLogInStatus] = useContext(LogInStatusContext)

  const [posts, setPosts] = useState()

  const [listOfPosts, setListOfPosts] = useContext(ListOfPostsContext)

  useEffect(() => {
      fetch('http://localhost:4000/api/posts')
                .then(res=> res.json())
                .then(json=> setPosts(json))
  }, [])

  useEffect(() => {
    if(!category && posts && posts) {
      setListOfPosts(posts && posts)
    } else if(category) {
      const filteringPosts = posts && posts.filter((one) => one.category[0].includes(category))
      setListOfPosts(filteringPosts)}
  }, [category, posts])

//console.log(posts)


  return (
    <>

    { logInStatus && logInStatus ? 
    <CreatePost /> : null
    }

    <div style={{ display: 'flex', margin: '2% 15%', flexDirection:'column' }}>
    { listOfPosts && listOfPosts.map((one) => {
      return(

        <Card className={classes.root} 
    style={{ textAlign: 'center', boxShadow: '0px none', marginBottom: '2%', border: '1px solid #eeeeee' }}>
      <CardContent style={{ padding: '2%' }}>
        <Typography className={classes.title} color="textPrimary" 
        style={{ color: '#3d84b8', fontSize: '1.1rem', textTransform: 'uppercase' }}>
          {one.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" style={{ margin: 0 }}>
          {one.category[0]} 
          <br></br>
          Posted by {one.author.username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" style={{ margin: 0 }}>
          About: {one.about}
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center', padding: '2%' }}>
        <Button size="small" id="btn" target='blank' href={`${one.link}`}>Read here</Button>
        <ThumbUpAltOutlinedIcon style={{ marginLeft: '10%', color:' rgba(0, 0, 0, 0.54)' }} fontSize="large" />
        <p>{one.tot_likes}</p>
      </CardActions>
    </Card>

      )
    })
}
    </div>
    </>
  );
}
