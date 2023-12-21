import React from 'react';
import SideBar from '../components/SideBar';
import ExpenseForm from '../components/ExpenseForm';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/actions/expenses';

const AddExpense = () => {
   const dispatch = useDispatch();
   // pass addExpense function as onSubmit props
   const onSubmit = (expense) => {
      dispatch(addExpense(expense));
   }
   return (
      <div className="page-container">
         <SideBar />
         <div className="main-content">
            <div className="top-bar">
               <h1 className="page-title">New Expense</h1>
            </div>
            <ExpenseForm onSubmit={onSubmit}/>
         </div>
      </div>
   )
}

export default AddExpense;
