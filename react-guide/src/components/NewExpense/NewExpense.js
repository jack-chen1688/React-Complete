import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
