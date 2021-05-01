import React from 'react';

import CreatePost from './CreatePost'

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


  return (
    <>

    {/* add condition here */}
    <CreatePost />

    <div style={{ display: 'flex', margin: '2% 15%', flexDirection:'column' }}>
    <Card className={classes.root} 
    style={{ textAlign: 'center', boxShadow: '0px none', marginBottom: '2%', border: '1px solid #fcecdd' }}>
      <CardContent style={{ padding: '2%' }}>
        <Typography className={classes.title} color="textPrimary" 
        style={{ color: '#91091e', fontSize: '1.1rem', textTransform: 'uppercase' }}>
          oiujdelikujzh gfdkjmskijs xjhncdxkus xayijunzsxku jcdsxkjucdxik cdsxucdujsxi kufvcdkujnz cdjgcdxj mnhfvcdxj gcdsxkujnhzfvhnfv cdjmbg fvc
        </Typography>
        <Typography className={classes.pos} color="textSecondary" style={{ margin: 0 }}>
          Category // maybe
        </Typography>
        <Typography className={classes.pos} color="textSecondary" style={{ margin: 0 }}>
          About: 
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center', padding: '2%' }}>
        <Button size="small" id="btn">Read here</Button>
        <ThumbUpAltOutlinedIcon style={{ marginLeft: '10%', color:' rgba(0, 0, 0, 0.54)' }} fontSize="large" />
        <p>9</p>
      </CardActions>
    </Card>

    </div>
    </>
  );
}
