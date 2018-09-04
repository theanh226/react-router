import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
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
    main: ({match}) => <Products match={match} />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
