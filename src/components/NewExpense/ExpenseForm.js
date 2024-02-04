import React,{useState} from 'react'
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState('');
    const [entredAmount, setentredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    const titleChangeHandler = (e)=>{
        setenteredTitle(e.target.value);
    }

    const amountChangeHandler = (e)=>{
        setentredAmount(e.target.value);
    }

    const dateChangeHandler = (e)=>{
        setenteredDate(e.target.value);
    }
    

    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: entredAmount,
            date : new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setenteredTitle("")
        setentredAmount("")
        setenteredDate("")

    }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input value={enteredTitle} type='text' onChange={titleChangeHandler}/>

            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input value={entredAmount} type='number' onChange={amountChangeHandler}/>

            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input value={enteredDate} type='date' onChange={dateChangeHandler}/>

            </div>

        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>

        </div>
        </form>
  )
}

export default ExpenseForm
