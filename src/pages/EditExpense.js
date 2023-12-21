import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideBar from '../components/SideBar';
import ExpenseForm from '../components/ExpenseForm';
import { useDispatch } from 'react-redux';
import { editExpense } from '../redux/actions/expenses';

const EditExpense = (props) => {
   // Get expense list
   const expenseList = useSelector((state) => state.expenses.expenseList);

   const { id } = useParams();
   // Use id to find item in expense list
   const item = expenseList.find((expense) => {
      return expense.id === id;
   });

   const dispatch = useDispatch();
   // pass editExpense function as onSubmit props
   const onSubmit = (expense) => {
      dispatch(editExpense(id, expense));
   };

   return (
      <div className="page-container">
         <SideBar />
         <div className="main-content">
            <div className="top-bar">
               <h1 className="page-title">Edit Expense</h1>
            </div>
            <ExpenseForm onSubmit={onSubmit} expense={item}/>
         </div>
      </div>
   )
}

export default EditExpense;
