import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
   return (
      <div className="sidebar">
         <p>user icon</p>
         <ul className="sidebar-nav">
            <li><Link to="/">Expenses</Link></li>
            <li><Link to="/">Summary</Link></li>
            <li><Link to="/">Settings</Link></li>
            <li><Link to="/">About</Link></li>
         </ul>
      </div>
   )
}

export default SideBar
