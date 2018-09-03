import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var defaultStyleLink = "mr-2 text-danger";
        var active = match ? "active mr-2" : defaultStyleLink;
        return (
          <li >
            <Link  to={to} className={active} >
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <ul className="nav navbar-nav d-flex flex-row w-75">
              <MenuLink label="Hompage" to="/" activeOnlyWhenExact={true} />
              <MenuLink label="About" to="/about" />
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
