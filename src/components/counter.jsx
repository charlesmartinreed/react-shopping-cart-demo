import React, { Component } from "react";

export default class Counter extends Component {
  // state obj comprises any data the Component might need
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  // these are the properties we set on our components, excluding key
  // console.log("props", this.props);
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
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }

  // export default Counter;
}
