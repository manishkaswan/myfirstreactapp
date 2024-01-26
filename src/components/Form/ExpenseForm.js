import React from "react";
function ExpenseForm() {
    function titleChange(evt) {
        console.log(evt.target.value);
    }
    function ammountChange(evt) {
        console.log(evt.target.value);
    }
    function DateChange(evt) {
        console.log(evt.target.value);
    }


    return (

        <form id="expenseForm">
            <label for="expenseTitle">Expense Title:</label>
            <input onChange={titleChange} type="text" id="expenseTitle" name="expenseTitle" required />

            <label for="expenseAmount">Expense Amount:</label>
            <input onChange={ammountChange} type="number" id="expenseAmount" name="expenseAmount" required />

            <label for="expenseDate">Date:</label>
            <input onChange={DateChange} type="date" id="expenseDate" name="expenseDate" required />

            <button type="button">Submit</button>
        </form>
    )
}

export default ExpenseForm