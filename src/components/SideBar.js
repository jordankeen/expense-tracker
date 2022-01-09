import React, { useState } from 'react';
import userIcon from '../assets/images/user-icon-orange.jpg'; 
import { NavLink } from 'react-router-dom';

const SideBar = () => {
   const [isActive, setIsActive] = useState(false);
   console.log(isActive);
   const toggleSidebar = () => {
      setIsActive(!isActive);
   }
   return (
      <div className={ isActive ? "sidebar active" : "sidebar"}>
         <div className="sidebar__header">
            <img src={userIcon} />
            <p>Welcome to the Expense Tracker App</p>
         </div>
         <ul className="sidebar__nav">
            <li><NavLink to="/" activeclassname="active"><span className="expenses">Expenses</span></NavLink></li>
            <li><NavLink to="/summary" activeclassname="active"><span className="summary">Summary</span></NavLink></li>
            <li><NavLink to="/about" activeclassname="active"><span className="about">About</span></NavLink></li>
         </ul>
         <div className="sidebar__logo">
            <img className="desktop-logo" src={require("../assets/images/expense-logo.png").default} alt="expense tracker logo"/>
            <img className="mobile-logo" src={require("../assets/images/expense-logo-mobile.png").default} alt="expense tracker logo"/>
         </div>
      </div>
   )
}

export default SideBar
