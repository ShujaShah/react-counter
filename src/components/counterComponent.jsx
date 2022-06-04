import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontWeight: "bold",
    fontSize: 10,
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge bg-primary m-2">
          {this.formatCount()}
        </span>{" "}
        {/*Note that in bootstrap 5 we have to use bg-primary instead of badge-primary*/}
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    {
      /*return this.state.count === 0 ? "Zero" : this.state.count;*/
    }

    //we can also refactor the above code, since this.state is used twice
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
