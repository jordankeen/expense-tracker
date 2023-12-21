import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/actions/expenses';
import moment from 'moment';

const ExpenseItem = ({ item }) => {
   const time = moment(item.createdAt).fromNow();
   const dispatch = useDispatch();

   const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteExpense(item));
   }
   return (
      <Link to={`/edit-expense/${item.id}`} className="expense-item" alt="Edit Task">
         <div className="expense-item__title-container">
            <p className="expense-item__category">{item.category}</p>
            <h3 className="expense-item__title">{item.title}</h3>
            <p className="expense-item__creation-date">{time}</p>
         </div>
         <div className="expense-item__details-container">
            <p className="expense-item__details">Details: {item.details}</p>
         </div>
         <div className="expense-item__amount-container">
            <p className="expense-item__amount">${item.amount}</p>
         </div>
         <button className="expense-item__delete" onClick={handleDelete} alt="delete"><span className="sr-only">Delete Task</span></button>
      </Link>
   );
};

export default ExpenseItem
