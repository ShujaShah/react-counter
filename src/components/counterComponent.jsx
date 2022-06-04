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
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/*Note that in bootstrap 5 we have to use bg-primary instead of badge-primary*/}
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
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
