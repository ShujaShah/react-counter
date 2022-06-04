import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontWeight: "bold",
    fontSize: 10,
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary"; //Note that in bootstrap 5 we have to use bg-primary instead of badge-primary
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
