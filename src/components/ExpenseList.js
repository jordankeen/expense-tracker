import React from 'react'
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = () => {
   // useSelector hook gives access to store state
   const { expenseList: list, query, sortBy, category } = useSelector((state) => state.expenses);
   // filter list using selectExpenses
   const filteredList = selectExpenses(list, query, sortBy, category);

   return (
      <div className="expense-list">
         {filteredList.length ? (
            filteredList.map((item) => (
               <ExpenseItem key={item.title} item={item} />
            ))
         ) : (
            <div className="empty-state">
               <label>Uh oh! Your expense list is empty</label>
            </div>
         )}
      </div>
   );
};

export default ExpenseList
