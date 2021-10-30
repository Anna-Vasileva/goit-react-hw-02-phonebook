import React, { Component } from "react";
import s from "./Filter.module.css";

class Filter extends Component {
  render() {
    const { filter, changeFilter } = this.props;
    return (
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={changeFilter}
          className={s.input}
        ></input>
      </label>
    );
  }
}

export default Filter;
