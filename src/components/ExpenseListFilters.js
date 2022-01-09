import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchExpense, sortByDate, sortByAmount, filterByCategory } from '../redux/actions/expenses';

const ExpenseListFilters = () => {
   const [query, setQuery] = useState("");

   const dispatch = useDispatch();
   const { sortBy, category } = useSelector((state) => state.expenses);

   const handleQuery = (e) => {
      setQuery(e.target.value);
      dispatch(searchExpense(e.target.value));
   }
   const handleSortFilter = (e) => {
      if (e.target.value === 'date') {
         dispatch(sortByDate());
     } else if (e.target.value === 'amount') {
         dispatch(sortByAmount());
     }
   }
   const handleCategoryFilter = (e) => {
      dispatch(filterByCategory(e.target.value));
   }
   return (
      <div className="expense-list-filters">
         <div className="expense-list-search-container">
            <input 
               placeholder="Search.."
               value={query}
               onChange={(e) => handleQuery(e)}
            />
         </div>
         <div>
            <select className="" onChange={(e) => handleSortFilter(e)} value={sortBy}>
               <option value="date">Date</option>
               <option value="amount">Amount</option>
            </select>
         </div>
         <div>
            <select className="" onChange={(e) => handleCategoryFilter(e)} value={category}>
               <option value="">All Categories</option>
               <option value="grocery">Grocery</option>
               <option value="transportation">Transportation</option>
               <option value="utilities">Utilities</option>
            </select>
         </div>
      </div>
   )
}

export default ExpenseListFilters
