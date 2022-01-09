import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import ExpenseListFilters from '../../components/ExpenseListFilters';
import ExpenseList from '../../components/ExpenseList';

const Home = () => {
   return (
      <div className="page-container">
         <SideBar />
         <div className="main-content">
            <div className="top-bar">
               <h1>Expenses:</h1>
               <div className="add-expense-button-container">
                  <Link to="/add-expense">Add Expense</Link>
               </div>
            </div>
            <ExpenseListFilters />
            <ExpenseList />
         </div>
      </div>
   );
};

export default Home;
