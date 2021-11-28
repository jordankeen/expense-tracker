import React from 'react'
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Card from './card';
import './expense-list.css';

const ExpenseList = () => {
   // use useSelector hook to get expenses/query state from store
   const { expenseList: list, query}  = useSelector((state) => state.expenses);
   const filteredList = list.filter(item => item.title.includes(query));
   const notifySuccess = () => toast.success('expense deleted');
   // OLD PLACEHLDER DATA

   // const expenses = [{
   //    title: 'rent',
   //    logo: 'abcd',
   //    createdAt: Date.now(),
   //    amount: 100,
   //    },
   //    {
   //       title: 'gas',
   //       logo: 'ccc',
   //       createdAt: Date.now(),
   //       amount: 50,
   //    },
   // ];

   return (
      <div className="expense-list">
         <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
         />
         {filteredList.length ? (
            filteredList.map((item) => (
               <Card item={item} key={item.title} notifySuccess={notifySuccess}/>
            ))
         ) : (
            <div className="empty-state">
               <img src={require('../../assets/images/empty.png').default} alt='empty list' className="empty-image" />
               <label>Uh oh! Your expense list is empty</label>
            </div>
         )}
      </div>
   );
};

export default ExpenseList;
