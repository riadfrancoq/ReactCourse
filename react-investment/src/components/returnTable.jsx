import  YearlyReturn  from './yearlyReturn';
const ReturnTable = ({yearlyData}) => {

    return (
        <>
        {yearlyData.length >= 1 ? (
            <table className="result">
            <thead>
              <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              
              {yearlyData.map((data) =>
                <YearlyReturn key={data.year} data={data} />
              )}
            </tbody>
          </table>
    ) : <div className="no-calculation"> Make a calculation </div> }
    </>
    );

};

export default ReturnTable;