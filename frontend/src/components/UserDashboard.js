import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link, useHistory, useParams } from "react-router-dom"
import Axios from 'axios'

import { LogInStatusContext } from '../context/LogInStatus'
import { UserInfosContext } from '../context/UserInfos'
// import { ListOfPostsContext } from '../context/ListOfPosts'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  table: {
    minWidth: 650,
  },
}));


export default function UserDashboard() {

  const BACKEND_URL = process.env.REACT_APP_PROD_URL

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const history = useHistory()

  // const [listOfPosts, setListOfPosts] = useContext(ListOfPostsContext)

  const [logInStatus, setLogInStatus] = useContext(LogInStatusContext)

  const [userInfos, setUserInfos] = useContext(UserInfosContext)

  const handleLogInStatus = () => {
    if(localStorage.getItem('logInStatus')) {
      setLogInStatus(true)
    }
  }

  function handleLogOut() {
    localStorage.removeItem('logInStatus')
    localStorage.removeItem('idUser')
    localStorage.removeItem('keyUser')
    setLogInStatus(false)
    history.push('/access/users')
    setUserInfos()
  }

  const [postsCreated, setPostsCreated] = useState([])


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
        Axios.get(`${BACKEND_URL}api/users/oneUser/posts/${idUser}`, config)
        .then((res) => {
        setPostsCreated(res.data[0].postsCreated)
      }).catch((err) => {
        if(err) {
          console.log(err)
        }})
    }}
  }, [logInStatus])


  return (
    <div className={classes.root}>
    {logInStatus && 
    <Button id="abtn" style={{ float: 'right', margin: '2%' }} onClick={() => handleLogOut()}>
      Log out
    </Button>}
      <AppBar position="static" style={{ backgroundColor: '#395697', marginTop: '2%'  }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Posts published" {...a11yProps(1)} />
          <Tab label="Posts liked" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      {userInfos && 
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><PermIdentityIcon /></TableCell>
            <TableCell>{userInfos.username}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><MailOutlineIcon /></TableCell>
            <TableCell>{userInfos.email}  </TableCell>
          </TableRow>
        </TableHead>
        </Table>
    </TableContainer>}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
      {postsCreated && postsCreated.map((one) => {
        return (
        <TableRow>
            <TableCell><DescriptionOutlinedIcon /></TableCell>
            <TableCell style={{ color: '#395697', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            <a id="aStyle" target="blank" href={one.link}>{one.title}</a></TableCell>
          </TableRow>)
      })}
      </TableHead>
        </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
      {userInfos && userInfos.posts_liked.map((one) => {
        return (
        <TableRow>
            <TableCell><ThumbUpAltOutlinedIcon /></TableCell>
            <TableCell style={{ color: '#395697', fontSize: '1.1rem', textTransform: 'uppercase' }}><a id="aStyle" target="blank" href={one.link}>
            {one.title}</a></TableCell>
          </TableRow>)
      })}
      </TableHead>
        </Table>
    </TableContainer>
      </TabPanel> 
    </div>
  );
}




