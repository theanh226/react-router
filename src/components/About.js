import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: false
    };
  }

  StateIsCheck = isCheck => {
    this.setState({
      isCheck: isCheck
    });
    console.log(this.state.isCheck);
  };

  render() {
    var { isCheck } = this.state;
    return (
      <div className="Container">
        <h2 className="text-warning">About Page</h2>
        <button
          className="btn btn-success"
          onClick={() => this.StateIsCheck(false)}
        >
          Allowed
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.StateIsCheck(true)}
        >
          nicht allowed
        </button>
        <Prompt
          when={isCheck}
          message={location => `are you sure go to  ${location.pathname}`}
        />
      </div>
    );
  }
}

export default About;
