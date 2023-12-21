import React from 'react'
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = () => {
   const { expenseList: list, query, sortBy, category } = useSelector((state) => state.expenses);
   // filter list using selectExpenses
   const filteredList = selectExpenses(list, query, sortBy, category);

   const renderExpenses = () => {
      return (
         <div className="expense-list">
            {filteredList.length ? (
               filteredList.map((item) => (
                  <ExpenseItem key={item.title} item={item} />
               ))
            ) : (
               noItemsMessage()
            )}
         </div>
      )
   }
   const noItemsMessage = () => {
      return (
         <div className="empty-state">
            <label>There are no expenses to show.</label>
         </div>
      )
   }
   return (
      <div>
         {list.length ? (
            renderExpenses()
         ) : (
            noItemsMessage()
         )}
      </div>
   )
};

export default ExpenseList
