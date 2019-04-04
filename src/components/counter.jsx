import React, { Component } from "react";

// what is the difference between props and state?
// prop includes data that we feed to the component
// state includes data that is local or private to that component so that other components can't access that state
// props are read only

export default class Counter extends Component {
  // state obj comprises any data the Component might need
  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => {
    // this.props.value = 0; NOPE! The prop is read only - this is where we use our setState because the property has a state, as does the component
    this.setState({
      value: this.state.value + 1
    });
  };

  // these are the properties we set on our components, excluding key
  // {this.props.children} can be used to access children for a component
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
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
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
    return (classes += this.state.value === 0 ? "warning" : "primary");
  }

  // export default Counter;
}
