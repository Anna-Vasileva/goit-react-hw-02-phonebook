import React, { Component } from "react";

class Filter extends Component {
  // const {filter, changeFilter} = this.props;
  render() {
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          value={this.props.filter}
          onChange={this.props.changeFilter}
        ></input>
      </label>
    );
  }
}

export default Filter;
