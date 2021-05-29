import React from "react";
<<<<<<< HEAD
//compponents 
import Home from "../src/Components/Core/Home/Home/Home"
import Login from "../src/Components/Core/Login/Login"
import Navbar from '../src/Components/Global/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
=======
// components
import Home from "../src/Components/Core/Home/Home/Home"
import Login from "../src/Components/Core/Login/Login"
import Navbar from '../src/Components/Global/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> 072f834001235c147bfcd5cbbcd94dc5be00c99e

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
