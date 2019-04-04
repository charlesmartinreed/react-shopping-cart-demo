import React, { Component } from "react";

export default class Counter extends Component {
  // state obj comprises any data the Component might need
  state = {
    count: 0
  };

  //in react, we don't modify the state directly
  // not this.state.count++; this technically works, but react is not aware of it
  // instead we use the setState method which brings the virtual DOM in line with the DOM
  // so when we pass the object to setState it either finds and updates the value or creates one accordingly
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // note that, unlike in vanilla JS, we don't call the function attached to the onClick listener immediately
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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
