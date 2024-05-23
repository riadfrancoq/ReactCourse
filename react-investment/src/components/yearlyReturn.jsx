const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });


export const YearlyReturn = ({data}) => {
    const {year, yearlyInterest, savingsEndOfYear, totalInterestGained, totalInvestedCapital} = data;
    return (
        <tr>
                  <td>{year}</td>
                  <td>{formatter.format(savingsEndOfYear)}</td>
                  <td>{formatter.format(yearlyInterest)}</td>
                  <td>{formatter.format(totalInterestGained)}</td>
                  <td>{formatter.format(totalInvestedCapital)}</td>
        </tr>
    )
}

export default YearlyReturn;