import { useState } from 'react';
import  Header  from './components/header';
import  Form  from './components/form';
import  ReturnTable  from './components/returnTable';
function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const calculateHandler = (userInput) => {
    userInput.preventDefault();
    const yearlyData = []; 
    let currentSavings = +userInput.target['current-savings'].value; 
    const yearlyContribution = +userInput.target['yearly-contribution'].value; 
    const expectedReturn = +userInput.target['expected-return'].value / 100;
    const duration = +userInput.target['duration'].value;
    const startSaving = currentSavings;
    let totalInterestGained = 0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterestGained += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
       
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterestGained: totalInterestGained,
        totalInvestedCapital: yearlyContribution * i + startSaving
      });
    }
    setYearlyData(yearlyData);
  };

  return (
    <div>
      <Header/>
      <Form  calculateHandler={calculateHandler} setYearlyData={setYearlyData}/>
      <ReturnTable yearlyData={yearlyData}/>

    </div>
  );
}

export default App;
