import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const changeFilterHandler = (year) => {
    console.log("In Expenses", year);
    setYear(year);
  };

  const filteredItems = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  console.log("filteredItems", filteredItems);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={year} onChangeFilter={changeFilterHandler} />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
