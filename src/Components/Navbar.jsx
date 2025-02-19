import React from "react";
import {
  BsFillBellFill,
  // BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  // BsPerson,
} from "react-icons/bs";
const Navbar = ({ OpenSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar}></BsJustify>
      </div>
      <div>
        <h2 className="dashboard_heading">Welcome to the Dashboard</h2>
      </div>
      <div className="header-right">
        <BsSearch className="icon"></BsSearch>
        <input type="text" />
        <BsFillBellFill></BsFillBellFill>
        <BsPersonCircle></BsPersonCircle>
      </div>
    </header>
  );
};

export default Navbar;
