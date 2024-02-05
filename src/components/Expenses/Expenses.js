import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import Expenseitem from "./Expenseitem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2024");
  const filterChengeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  let expenseesContent = <p>No expense found</p>

  if (filteredExpenses.length === 1) {
    expenseesContent = filteredExpenses.map((items) => (
      <>
      <Expenseitem
        key={items.id}
        title={items.title}
        amount={items.amount}
        date={items.date}
      />
      <p>Only single Expense here. Please add more...</p>
      </>
    ))
  }else if (filteredExpenses.length > 0) {
    expenseesContent = filteredExpenses.map((items) => (
      <Expenseitem
        key={items.id}
        title={items.title}
        amount={items.amount}
        date={items.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChengeHandler}
      />
      {expenseesContent}
    </Card>
  );
};

export default Expenses;
