import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No epxenses found</h2>;
  }

  if (props.items.length > 0) {
    return props.items.map((item) => {
      return (
        // <ul className="expenses-list">
        <ul>
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        </ul>
      );
    });
  }
}

export default ExpensesList;
