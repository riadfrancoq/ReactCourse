import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js'
import './ExpenseItem.css';
import React, {useState} from 'react';

const ExpenseItem = ({date,title,amount}) => {
    // no nested functions
    const [useTitle, setTitle] = useState(title);
    const clickHandler = () => {
        setTitle('Updated');
    };

    // show  end with Handler

    return (
        <Card className = "expense-item">
            <ExpenseDate date={date}></ExpenseDate>
            <div className= "expense-item__description"> 
            <h2>{useTitle}</h2>
            <div className= "expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}> Change Title</button>
        </Card>
    );
}
export default ExpenseItem;