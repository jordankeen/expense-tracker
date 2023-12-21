import React, { useState } from 'react';
import userIcon from '../assets/images/user-icon-orange.jpg'; 
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/expense-logo.png';
import mobileLogo from '../assets/images/expense-logo-mobile.png';
import menuIcon from '../assets/images/menu-thin-white.svg';

const SideBar = () => {
   const [isActive, setIsActive] = useState(false);

   const toggleSidebar = () => {
      setIsActive(!isActive);
   }

   return (
      <div className="sidebar-container">
         <div className="mobile-navbar">
            <button className="sidebar__menu-toggle" onClick={toggleSidebar}>
               <img src={menuIcon} alt="menu icon"/>
            </button>
            <NavLink to="/" className="mobile-navbar__logo">
               <img src={mobileLogo} alt="expense tracker logo"/>
            </NavLink>
         </div>
         <div className={ isActive ? "sidebar__menu-overlay active" : "sidebar__menu-overlay"} onClick={toggleSidebar}></div>
         <div className={ isActive ? "sidebar active" : "sidebar"}>
            <button className="sidebar__menu-close" onClick={toggleSidebar}></button>
            <div className="sidebar__header">
               <img src={userIcon} alt="blank user icon"/>
               <p>Welcome to the Expense Tracker App</p>
            </div>
            <ul className="sidebar__nav">
               <li><NavLink to="/" activeclassname="active"><span className="expenses">Expenses</span></NavLink></li>
               <li><NavLink to="/summary" activeclassname="active"><span className="summary">Summary</span></NavLink></li>
               {/* <li><NavLink to="/about" activeclassname="active"><span className="about">About</span></NavLink></li> */}
            </ul>
            <div className="sidebar__logo">
               <img className="desktop-logo" src={logo} alt="expense tracker logo"/>
               <img className="mobile-logo" src={mobileLogo} alt="expense tracker logo"/>
            </div>
         </div>
      </div>
   )
}

export default SideBar
