import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({onAddExpense}) => {
    let id= 0;

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        id +=  1;
        const expenseData = {
            ...enteredExpenseData,
            id
        }
        onAddExpense(expenseData)
    };
	return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>);
};

export default NewExpense;
