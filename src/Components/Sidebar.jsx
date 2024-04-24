import React from 'react'
import { NavLink } from 'react-router-dom';
import { sideBar } from '../data';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div>
        <h1 className='heading'>Admin</h1>
      </div>
      <hr />
      {sideBar.map((item, index) => (
          <li key={index} className='list'> 
            <NavLink to={item.link} className='title'>
             <div className='icon'>{item.icon}</div>
            {item.title}
            </NavLink>
          </li>
        ))}
    </div>

  )
}

export default Sidebar
