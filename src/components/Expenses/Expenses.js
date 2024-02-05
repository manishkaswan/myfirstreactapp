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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChengeHandler}
      />
      {filteredExpenses.map((items) => (
        <Expenseitem
          key={items.id}
          title={items.title}
          amount={items.amount}
          date={items.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
