import React from 'react';

const SummaryTotals = (props) => {
   const totalExpenses = props.expenses.reduce((total, item) => {
      return total += item.total;
   }, 0);

   return (
      <div className="summary-totals">
         <div className="summary-totals__item">
            <h3 className="summary-totals__title">Total Expenses</h3>
            <p className="summary-totals__amount">${totalExpenses.toFixed(2)}</p>
         </div>
         { props.expenses.map((item, index) => (
            <div className="summary-totals__item" key={index}>
               <h3 className="summary-totals__title">{item.category}</h3>
               <p className="summary-totals__amount">${item.total.toFixed(2)}</p>
            </div>
         ))}
      </div>
   )
}

export default SummaryTotals;
