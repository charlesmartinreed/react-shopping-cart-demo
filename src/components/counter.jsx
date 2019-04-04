import React, { Component } from "react";

export default class Counter extends Component {
  // state obj comprises any data the Component might need
  state = {
    count: 0,
    tags: []
  };

  // since we can't use conditionals inside of our render method, we use this helper method to determine what to render based upon what

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are currently no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // alternatively, we can use the logical && to handle conditionals
  // basically, since we can apply the logical AND between non-boolean
  // an empty string is falsey, non-empty is truthy
  // true && 'Hi' && 1 - truthy, truthy, truthy, result is derived from last operand
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

// export default Counter;
