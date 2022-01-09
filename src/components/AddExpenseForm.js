import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/actions/expenses';
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {
   const [title, setTitle] = useState("");
   const [amount, setAmount] = useState("");
   const [details, setDetails] = useState("");
   const [category, setCategory] = useState("");
   const [detailsCount, setDetailsCount] = useState(0);

   const navigate = useNavigate();

   // useDispatch hook, to access/use reducer
   const dispatch = useDispatch();

   const handleTitle = (e) => {
      setTitle(e.target.value);
   };
   const handleAmount = (e) => {
      const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         setAmount(amount);
		}
   };
   const handleDetails = (e) => {
      // const detailsLength = e.target.value.length;
      setDetailsCount(e.target.value.length)
      setDetails(e.target.value);
   }
   const handleCategory = (e) => {
      setCategory(e.target.value);
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      if(title === '' || amount === '' || category === '') {
         alert('error');
         return;
      }
      const data = {
         id: uuidv4(),
         title,
         amount,
         category,
         details,
         createdAt: new Date()
      };
      dispatch(addExpense(data));
      navigate('/');
   }
   return (
      <div>
         <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-item">
               <label>Title:</label>
               <input
                  type="text"
                  placeholder="Expense Title"
                  value={title}
                  autoFocus
                  onChange={(e) => handleTitle(e)}
               />
            </div>
            <div className="form-item">
               <label>Amount:</label>
               <input
                  type="text"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => handleAmount(e)}
               />
            </div>
            <div className="form-item">
               <label>Details:</label>
               <div className="add-expense-form-details-container">
                  <textarea
                     className="add-expense-form-details"
                     value={details}
                     maxLength="50"
                     onChange={(e) => handleDetails(e)}
                  />
                  <p className="details-character-count">{detailsCount}/50</p>
               </div>
            </div>
            <select className="add-expense-form-category-select" onChange={(e) => handleCategory(e)}>
               <option>Select a category</option>
               <option value="grocery">Grocery</option>
               <option value="transportation">Transportation</option>
               <option value="utilities">Utilities</option>
            </select>
            <button>Add Expense</button>
         </form>
      </div>
   );
};

export default AddExpenseForm
