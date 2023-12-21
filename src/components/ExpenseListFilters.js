import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchExpense, sortByDate, sortByAmount, filterByCategory } from '../redux/actions/expenses';

const ExpenseListFilters = () => {
   const [query, setQuery] = useState("");

   const dispatch = useDispatch();
   const { sortBy, category, query: storeQuery } = useSelector((state) => state.expenses);

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
   const resetSearch = () => {
      setQuery('');
      dispatch(searchExpense(''));
      document.querySelector('.search').focus();
   }
   return (
      <div className="expense-list-filters">
         <div className="expense-list-search-container">
            <input 
               className="input-style search"
               placeholder="Search.."
               value={storeQuery ? storeQuery : query}
               onChange={(e) => handleQuery(e)}
            />
            {storeQuery || query ? <button className="search-reset" onClick={resetSearch}><span className="sr-only">clear input</span></button> : null}
         </div>
         <div className="select-filters">
            <select className="select-filter-style sort-filter" onChange={(e) => handleSortFilter(e)} value={sortBy}>
               <option value="date">Date</option>
               <option value="amount">Amount</option>
            </select>
            <select className="select-filter-style category-filter" onChange={(e) => handleCategoryFilter(e)} value={category}>
               <option value="">All Categories</option>
               <option value="grocery">Grocery</option>
               <option value="housing">Housing</option>
               <option value="other">Other</option>
               <option value="entertainment">Entertainment</option>
               <option value="transportation">Transportation</option>
               <option value="utilities">Utilities</option>
            </select>
         </div>
      </div>
   )
}

export default ExpenseListFilters
