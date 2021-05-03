import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Link, Redirect } from "react-router-dom"

import { LogInStatusProvider } from './context/LogInStatus'
import {  UserInfosProvider } from './context/UserInfos'

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
    <NavBar />
    <Switch>
    <Route exact path="/" component={Posts} />
    <Route exact path="/access" component={LoginRegister} />
    <Route exact path="/user/:id" component={UserDashboard} />
    {/*<PrivateRoute exact path='/user/:id' component={UserDashboard} maybe?? !! />*/}
    <Redirect to="/" />
    </Switch>
    <Footer />
    </UserInfosProvider>
    </LogInStatusProvider>
    </Router>
  </>
  );
}

export default App;
