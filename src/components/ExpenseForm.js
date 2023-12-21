import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

const ExpenseForm = (props) => {
   const [title, setTitle] = useState(props.expense ? props.expense.title : "");
   const [amount, setAmount] = useState(props.expense ? props.expense.amount.toFixed(2) : "");
   const [details, setDetails] = useState(props.expense ? props.expense.details : "");
   const [category, setCategory] = useState(props.expense ? props.expense.category : "");
   const [detailsCount, setDetailsCount] = useState(props.expense ? props.expense.details.length : 0);
   const [invalidTitle, setInvalidTitle] = useState(false);
   const [invalidAmount, setInvalidAmount] = useState(false);
   const [invalidCategory, setInvalidCategory] = useState(false);

   const handleTitle = (e) => {
      setTitle(e.target.value);
      e.target.value !== '' && setInvalidTitle(false);
   };
   const handleAmount = (e) => {
      const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         setAmount(amount);
         setInvalidAmount(false);
		}
   };
   const handleDetails = (e) => {
      setDetailsCount(e.target.value.length)
      setDetails(e.target.value);
   }
   const handleCategory = (e) => {
      setCategory(e.target.value);
      e.target.value !== '' && setInvalidCategory(false);
   }

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      // Check for valid title, amount, category
      if(title === '' || amount === '' || category === '') {
         title === '' && setInvalidTitle(true);
         amount === '' && setInvalidAmount(true);
         category === '' && setInvalidCategory(true);
         return;
      }
      // Submit form
      if (!invalidTitle && !invalidAmount && !invalidCategory) {
         const item = {
            id: props.expense ? props.expense.id : uuidv4(),
            title,
            amount: parseFloat(amount),
            category,
            details,
            createdAt: props.expense ? props.expense.createdAt : new Date()
         };
         props.onSubmit(item);
         navigate('/');
      }
   }

   return (
      <div>
         <form onSubmit={(e) => handleSubmit(e)} className="expense-form">
            <div className="expense-form__item">
               <label htmlFor="title">Title:</label>
               <input
                  className="input-style"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter a title.."
                  value={title}
                  autoFocus
                  onChange={(e) => handleTitle(e)}
               />
               { invalidTitle && <p className="expense-form__error-message">Please enter a title</p> }
            </div>
            <div className="expense-form__item">
               <label htmlFor="amount">Amount:</label>
               <input
                  className="input-style"
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="$0.00"
                  value={amount}             
                  onChange={(e) => handleAmount(e)}
               />
               { invalidAmount && <p className="expense-form__error-message">Please enter an amount</p> }
            </div>
            <div className="expense-form__item">
               <label htmlFor="details">Details:</label>
               <div className="expense-form-details">
                  <textarea
                     className="text-area-style"
                     name="details"
                     id="details"
                     value={details}
                     maxLength="75"
                     onChange={(e) => handleDetails(e)}
                  />
                  <p className="expense-form-details__count">{detailsCount}/75</p>
               </div>
            </div>
            <div className="expense-form__item">
               <label htmlFor="category">Category:</label>
               <select
                  className="select-filter-style expense-form__category-select"
                  onChange={(e) => handleCategory(e)}
                  value={category}
                  name="category"
                  id="category"
               >
                  <option value="">Select a Category</option>
                  <option value="grocery">Grocery</option>
                  <option value="housing">Housing</option>
                  <option value="other">Other</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="transportation">Transportation</option>
                  <option value="utilities">Utilities</option>
               </select>
               { invalidCategory && <p className="expense-form__error-message">Please select a category</p> }
            </div>
            <div className="expense-form__button-container">
               <button className="button-style expense-form__add-button">Save Expense</button>
               <Link to="/" className="button-style cancel expense-form__cancel-button">Cancel</Link>
            </div>
         </form>
      </div>
   );
};

export default ExpenseForm;
