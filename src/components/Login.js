import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pswd: "",
      email: ""
    };
  }
  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onLogin = e => {
    e.preventDefault();
    var { pswd, email } = this.state;
    console.log(this.state.email);
    console.log(this.state.pswd);
    if (email === "test@gmail.com" && pswd === "test") {
      localStorage.setItem(
        "USER",
        JSON.stringify({
          username: email,
          password: pswd
        })
      );
    }
  };
  render() {
    var { pswd, email } = this.state;
    var loggedInUser = localStorage.getItem("USER");
    if (loggedInUser !== null) {
      return (
        <Redirect
          to={{
            pathname: "/products",
            state: {
              from: location
            }
          }}
        />
      );
    }
    var { location } = this.props;
    console.log(location);
    return (
      <div className="container">
        <h2>Stacked form</h2>
        <form onSubmit={this.onLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              value={pswd}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
