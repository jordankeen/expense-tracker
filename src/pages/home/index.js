import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ExpenseList from '../../components/expense-list';
// import TopFold from '../../components/topfold';
import FormModal from '../../components/FormModal';
import './home.css';
import SideBar from '../../components/SideBar';
import ExpenseListFilters from '../../components/ExpenseListFilters';
import ExpenseList from '../../components/ExpenseList';

const Home = () => {
   // const [modalOpen, setModalOpen] = useState(false);

   return (
      <div className="page-container">
         {/* <TopFold /> */}
         {/* <ExpenseList /> */}
         {/* <button onClick={()=>setModalOpen(!modalOpen)}>Add Expense</button> */}
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
   )
}

export default Home;
