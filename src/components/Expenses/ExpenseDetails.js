function ExpenseDetails(props){
    return(
    <>
    <div className="expense-item__description"></div>
                <h2>{props.title}</h2>
                <h2 className="expense-item__price">{props.amount}</h2>
                </>
)
}

export default ExpenseDetails