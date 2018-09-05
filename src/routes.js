import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Login from "./components/Login";
import React from "react";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/About",
    exact: false,
    main: () => <About />
  },
  {
    path: "/products",
    exact: false,
    main: ({ match, location }) => (
      <Products match={match} location={location} />
    )
  },
  {
    path: "/login",
    exact: false,
    main: ({ location }) => <Login location={location} />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
