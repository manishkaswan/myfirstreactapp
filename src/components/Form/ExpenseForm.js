import React,{useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm() {

    const [enteredtitle,setenteredtitle] = useState('')
    const [enteredAmount,setenteredamount] = useState('')
    const [enteredDate,setenteredDate] = useState('')

    function titleChange(evt) {
        setenteredtitle(evt.target.value);
        console.log(evt.target.value);
    }
    function ammountChange(evt) {
        setenteredamount(evt.target.value);
        console.log(evt.target.value);
    }
    function DateChange(evt) {
        setenteredDate(evt.target.value);
        console.log(evt.target.value);
    }

    



    return (
        <div className="new-expense">

        <form id="expenseForm">
            <div className="new-expense__controls">
            <div className="new-expense_control">
            <label for="expenseTitle">Expense Title:</label>
            <input onChange={titleChange} type="text" id="expenseTitle" name="expenseTitle" required ></input>
            </div>
            <div className="new-expense_control">
            <label for="expenseAmount">Expense Amount:</label>
            <input onChange={ammountChange} type="number" id="expenseAmount" name="expenseAmount" required ></input>
            </div>
            <div className="new-expense_control">
            <label for="expenseDate">Date:</label>
            <input onChange={DateChange} type="date" id="expenseDate" name="expenseDate" required ></input>
            </div>
            </div>
            <div className="new-expense__actions">
            <button type="Submit">Add Expense</button>
            </div>
        </form>
        </div>
    )
}

export default ExpenseForm