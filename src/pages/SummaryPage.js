import React from 'react';
import { useSelector } from 'react-redux';
import { expenseTotals } from '../selectors/expensesTotal';
import SideBar from '../components/SideBar';
import DonutChart from '../components/DonutChart';
import BarChart from '../components/BarChart';
import SummaryTotals from '../components/SummaryTotals';

const SummaryPage = () => {
   const expenseList = useSelector((state) => state.expenses.expenseList);
   // Get Expense Totals
   const expenses = expenseTotals(expenseList);

   return (
      <div className="page-container">
         <SideBar />
         <div className="main-content">
            <div className="top-bar">
               <h1 className="page-title">Summary</h1>
            </div>
            <div className="summary-page-container">
               <div className="summary-page-inner">
                  <div className="summary-page-totals">
                     <SummaryTotals expenses={expenses}/>
                  </div>
                  <div className="summary-page-donut-chart">
                     <DonutChart expenses={expenses}/>
                  </div>
                  <div className="summary-page-bar-chart">
                     <BarChart expenses={expenses}/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SummaryPage;
