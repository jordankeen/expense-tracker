import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import AddExpenseForm from '../../components/AddExpenseForm';

const AddExpense = () => {
   return (
      <div className="page-container">
         <SideBar />
         <div className="main-content">
            <div className="top-bar">
               <h1>New Expense</h1>
               <div className="add-expense-button-container">
                  <Link to="/">Back</Link>
               </div>
            </div>
            <AddExpenseForm />
         </div>
      </div>
   )
}

export default AddExpense;
