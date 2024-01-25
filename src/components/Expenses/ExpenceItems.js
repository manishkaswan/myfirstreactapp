import React,{useState} from 'react';
import Card from "../UI/card.js"
import "./ExpenceItems.css"
import "./ExpenceDate"
import ExpenceDate from "./ExpenceDate"

function ExpenceItems (props) {
    const [title,setTitle] = useState(props.title);
    const Clickheandler = ()=>{
        setTitle(('Updated'))
    }
    const [amount,setAmount] = useState(props.amount);
    const Updatecost = ()=>{
        setAmount("$100")
    }
    return(
        <Card className="expense-item">
            <ExpenceDate date = {props.date} />
            <div className="expense-item__discription">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={Clickheandler}>Update Title</button>
            <button onClick={Updatecost}>Update Cost</button>
        </Card>
    )
}
export default ExpenceItems