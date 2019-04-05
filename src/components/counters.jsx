// render a list of counters
import React, { Component } from "react";
import Counter from "./counter";

// counter component raises events, we bubble it up to the parent of the component(s)
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          RESET
        </button>
        {this.props.counters.map(counter => (
          <Counter
            counter={counter}
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
