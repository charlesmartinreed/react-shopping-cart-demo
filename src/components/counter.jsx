import React, { Component } from "react";

export default class Counter extends Component {
  // state obj comprises any data the Component might need
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    // why parenthesis? Because JS actually automatically places a ; at the end of a line if the end of the line is detected, which would preclude our return statement block from being executed.
    return (
      // remember that each element in a loop needs a key in order to track it as the state/render changes
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    // depending on count, we change the class
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }
}

// export default Counter;
