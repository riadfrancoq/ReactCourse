import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFIlter";
import './Expenses.css';
import React, { useState } from 'react';
import ExpensesList from "./ExpensesList";

const Expenses = ({items}) => {
    
    const [filteredYear, setfilteredYear] = useState('2020');


    
    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    }

    const filteredExpenses = items.filter (expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    
    
    return (
        <Card className='expenses'>
            <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
    }

export default Expenses;