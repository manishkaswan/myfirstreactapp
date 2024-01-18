import "./ExpenceItems.css"
import "./ExpenceDate"
import ExpenceDate from "./ExpenceDate"
import ExpenseDetails from "./ExpenseDetails"
function ExpenceItems (props) {
    return(
        <div className="expense-item">
            <ExpenceDate date = {props.date} />
            <ExpenseDetails title = {props.title} amount = {props.amount} />
                <div className="expense-item__description"></div>
                <h2>{props.LocationOfExpenditure}</h2>
            
        </div>
    )
}
export default ExpenceItems