import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpenseList from '../components/ExpenseList';
import InfoModal from '../components/InfoModal';

const Home = () => {
   // const [showInfoModal, setShowInfoModal] = useState(false);
   // // check if infoModal cookie exists
   // if (Cookies.get('expensetracker_infoModal')) {
   //    console.log('cookie', Cookies.get('expensetracker_infoModal'));
   //    console.log('there is a cookie.. do nothing');
   // } else {
   //    console.log('no cookie, set it, and show modal');
   //    Cookies.set('expensetracker_infoModal', true, { expires: 1 });
   //    setShowInfoModal(true);
   // }

   return (
      <React.Fragment>
         <InfoModal />
         <div className="page-container">
            <SideBar />
            <div className="main-content">
               <div className='container'>
                  <div className="top-bar">
                     <h1 className="page-title">Expenses</h1>
                     <div className="add-expense-button-container">
                        <Link to="/add-expense" className="button-style add-expense-button">Add Expense</Link>
                     </div>
                  </div>
                  <ExpenseListFilters />
                  <ExpenseList />
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Home;
