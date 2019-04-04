import React, { Component } from "react";

export default class Counter extends Component {
  // state obj comprises any data the Component might need
  state = {
    count: 0
  };

  // constructor() {
  //   super();
  //   // returns new instance of handleIncrement where this is always referencing the current counter object
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // alternatively, since arrow functions don't get their own 'this' but rather inherit it, we can make our method an arrow function rather than using the convoluted constructor/bind style seen above

  handleIncrement = () => {
    console.log("Increment Clicked", this);
  };

  // note that, unlike in vanilla JS, we don't call the function attached to the onClick listener immediately
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }

  // export default Counter;
}
