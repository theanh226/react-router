import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <ul className="nav navbar-nav d-flex flex-row w-75">
              <li className="active cursor-pointer text-white mr-2 ">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  //or you can use this method to apparent link with key word 'activeStyle' inner style
                  // activeStyle={{
                  //   fontWeight: "bold",
                  //   color: "red"
                  // }}
                  // className="text-white "
                >
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer text-white">
                <NavLink
                  to="/about"
                  activeClassName="active"
                  // activeStyle={{
                  //   fontWeight: "bold",
                  //   color: "red"
                  // }}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* content */}
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
