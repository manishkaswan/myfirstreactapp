import React from 'react'
import Expenseitem from './Expenseitem'
import "./ExpensesList.css"

const ExpensesList = (props) => {

    if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }
  return (
    <ul className='expenses-list'>
        {props.items.map((items) => (
        <Expenseitem
          key={items.id}
          title={items.title}
          amount={items.amount}
          date={items.date}
        />
      ))};

    </ul>
  )
}

export default ExpensesList
