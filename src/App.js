import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <ul className="nav navbar-nav d-flex flex-row w-75">
              <li className="active cursor-pointer text-white mr-2 hover-link">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer text-white hover-link">
               <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          {/* content */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
