import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu";
import routes from "./routes";
import { Switch,  BrowserRouter as Router,Route } from "react-router-dom";


class App extends Component {
  render() {

    return (
      <Router>
      <div className="App">
        <Menu />
        <Switch>{this.showContenMenu(routes)}</Switch>
      </div>
      </Router>

    );
  }
  showContenMenu = (routes) => {
    var result = null;

    if(routes.length > 0){
      result = routes.map((router, index)=>{
        return (
          <Route key={index} path={router.path} exact={router.exact} component={router.main} />
        )
      })
    }
    return result;
  };
}

export default App;
