import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectHanlder = (event) => {
    event.preventDefault();
    const selectedYear = event.target.value;
    console.log("In ExpensesFilter", selectedYear);
    props.onChangeFilter(selectedYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectHanlder} value={props.year}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
