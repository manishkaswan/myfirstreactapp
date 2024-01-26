import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {

    const [enteredtitle, setenteredtitle] = useState('')
    const [enteredAmount, setenteredamount] = useState('')
    const [enteredDate, setenteredDate] = useState('')

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

    const subdata = {
        title: enteredtitle,
        amount: enteredAmount,
        date: enteredDate,
    }

    function Subclicked(e){
        e.preventDefault();
        console.log(subdata.title);
        console.log(subdata.amount);
        console.log(subdata.date);

        <div
            title={subdata.title}
            amount={subdata.amount}
            date={subdata.date}>
        </div>
    }



    return (
        <>

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
                        <button onClick={Subclicked} type="Submit">Add Expense</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ExpenseForm