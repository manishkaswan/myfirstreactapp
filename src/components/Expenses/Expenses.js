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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChengeHandler}
      />
      {props.items.map((items) => (
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
