import React from 'react';
import Expenses from './components/Expenses/Expenses.js';
const App = ()=>  {

  const expenses = [
    { id: 'e1', title: ' Car Insurance ', amount: 294.67, date: new Date(2021, 3, 10) },
    { id: 'e2', title: ' Car Insurance2 ', amount: 80, date: new Date(2020, 12, 9) },
    { id: 'e3', title: ' Car Insurance3 ', amount: 294.67, date: new Date(2021, 11, 10) },
  ]

  return (
    <div>
      <h2> Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

