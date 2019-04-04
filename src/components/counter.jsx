import React, { Component } from "react";

export default class Counter extends Component {
  // state obj comprises any data the Component might need
  state = {
    count: 0
  };

  // one way to apply styles, passed as an object to the style attr in a component
  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold"
  // };

  render() {
    // why parenthesis? Because JS actually automatically places a ; at the end of a line if the end of the line is detected, which would preclude our return statement block from being executed.
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

// export default Counter;
