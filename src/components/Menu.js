import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    label: "Homepage",
    to: "/",
    exact: true
  },
  {
    label: "Products",
    to: "/products",
    exact: false
  },
  {
    label: "Login",
    to: "/login",
    exact: false
  },
  {
    label: "About",
    to: "/about",
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className="mr-2">
            <Link to={to} className={`multiClassUseEs6 ${active} `}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <div className="Container">
        <nav className="navbar navbar-dark bg-dark">
          <ul className="nav navbar-nav d-flex flex-row w-75">
            {this.showMenu(menus)}
          </ul>
        </nav>
      </div>
    );
  }

  //Function
  showMenu = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.label}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
