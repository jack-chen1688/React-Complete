import React, { useState } from "react";
import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredItems = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  console.log(filteredItems);
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Selected year is ", selectedYear);
  };

  // .filter((item) => item.date.getYear() === filteredYear - 1900)
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={filterChangedHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
