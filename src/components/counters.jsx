// render a list of counters
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    //update the state and remove the item
    // console.log(counterId);
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  // why do we spread the counter object into counters[index]? Because we need to create a unique object that doesn't reference the same memory space as counters[index] in this.state. Updating these values directly is a no-no in React.
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  // this won't work in and of iself because we don't have a "single source of truth" - the value will be altered, but the state won't change because React is not aware of the change
  // the fix is to create a CONTROLLED component, which does not have a state of its own and gets all of its values from the props passed by the parent component
  handleReset = () => {
    // create a new array of counters and call this.setState on them
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          RESET
        </button>
        {this.state.counters.map(counter => (
          <Counter
            counter={counter}
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
