import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Link, Redirect } from "react-router-dom"

import LoginRegister from './components/LoginRegister'
import NavBar from './components/NavBar'
import Posts from './components/Posts'
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <>
    <Router>
    {/* UseContext for loggedInUser */}
    {/* UseContext for storingLikes ?? !! */}
    <NavBar />
    <Switch>
    <Route exact path="/" component={Posts} />
    <Route exact path="/access" component={LoginRegister} />
    {/*<PrivateRoute exact path='/user/:id' component={UserPage} maybe?? !! />*/}
    <Redirect to="/" />
    </Switch>
    <Footer />
    </Router>
  </>
  );
}

export default App;
