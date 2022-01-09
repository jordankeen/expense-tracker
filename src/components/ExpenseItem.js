import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/actions/expenses';
import moment from 'moment';

const ExpenseItem = ({ item }) => {
   const time = moment(item.createdAt).fromNow();
   const dispatch = useDispatch();

   const handleDelete = () => {
      dispatch(deleteExpense(item));
   }
   return (
      <div className="expense-item">
         <div className="expense-title-container">
            <p className="expense-category"></p>
            <h3 className="expense-title">{item.title}</h3>
            <p className="expense-details">Category: {item.category}</p>
         </div>
         <div className="expense-details-container">
            <p className="expense-details">Details: {item.details}</p>
         </div>
         <div className="expense-amount-container">
            <p className="expense-amount">${item.amount}</p>
         </div>
         <p className="expense-date">{time}</p>
         <button className="delete-expense-button" onClick={handleDelete}>Delete</button>
      </div>
   );
};

export default ExpenseItem
