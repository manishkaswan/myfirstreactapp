import React, { useState } from 'react'
import "./Expenses.css"
import Card from '../UI/Card';
import Expenseitem from './Expenseitem';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear,setfilteredYear] = useState('2024')
  const filterChengeHandler = selectedYear =>{
    setfilteredYear(selectedYear)
  }
  
  return (
    <Card className='expenses'>
      <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChengeHandler} />
      <Expenseitem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></Expenseitem>
      <Expenseitem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></Expenseitem>
      <Expenseitem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></Expenseitem>
      <Expenseitem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
  ></Expenseitem>
    </Card>
  )
}

export default Expenses
