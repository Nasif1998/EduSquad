import React from "react";
// components
import Home from "../src/Components/Core/Home/Home/Home"
import Login from "../src/Components/Core/Login/Login"
import Navbar from '../src/Components/Global/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CourseDetails from "./Components/CourseDetails/CourseDetails";

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

        <Route path="/course/:id">
            <CourseDetails></CourseDetails>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
