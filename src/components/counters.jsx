import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onAddCounter
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAddCounter} className="btn btn-success btn-sm m-2">
          Add Counter
        </button>
        <table>
          {counters.map(counter => (
            <tr>
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter}
              />
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Counters;
