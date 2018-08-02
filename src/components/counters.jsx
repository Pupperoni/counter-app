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
        <table>
          <thead>
            <tr>
              <td>
                <button
                  onClick={onReset}
                  className="btn btn-primary btn-sm m-2"
                >
                  Reset
                </button>
              </td>
              <td>
                <button
                  onClick={onAddCounter}
                  className="btn btn-success btn-sm m-2"
                >
                  Add Counter
                </button>
              </td>
            </tr>
          </thead>

          <tbody>
            {counters.map(counter => (
              <tr key={counter.id}>
                <Counter
                  key={counter.id}
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  counter={counter}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Counters;
