import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Link, Redirect } from "react-router-dom"

import { LogInStatusProvider } from './context/LogInStatus'
import {  UserInfosProvider } from './context/UserInfos'
import {  ListOfPostsProvider } from './context/ListOfPosts'

import LoginRegister from './components/LoginRegister'
import NavBar from './components/NavBar'
import Posts from './components/Posts'
import Footer from './components/Footer'
import UserDashboard from './components/UserDashboard'
import './App.css';


function App() {
  return (
    <>
    <Router>
    <LogInStatusProvider>
    <UserInfosProvider>
    <ListOfPostsProvider>
    <NavBar />
    <Switch>
    <Route exact path="/hackernews_challenge/" component={Posts} />
    <Route exact path="/hackernews_challenge/:category" component={Posts} />
    <Route exact path="/hackernews_challenge/access/users" component={LoginRegister} />
    <Route exact path="/hackernews_challenge/access/user/:id" component={UserDashboard} />
    <Redirect to="/" />
    </Switch>
    <Footer />
    </ListOfPostsProvider>
    </UserInfosProvider>
    </LogInStatusProvider>
    </Router>
  </>
  );
}

export default App;
