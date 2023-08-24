import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    { id: 'e1', title: ' Car Insurance ', amount: 294.67, date: new Date(2021,3,10)},
    {id: 'e2', title: ' Car Insurance2 ', amount: 80, date: new Date(2020,12,9)},
    {id: 'e3', title: ' Car Insurance3 ', amount: 294.67, date: new Date(2021,11,10)},
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title}></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
