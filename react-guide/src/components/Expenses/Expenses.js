import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredItems = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );
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
      {filteredItems.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
