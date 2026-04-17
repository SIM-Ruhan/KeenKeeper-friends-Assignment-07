import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            
            <div className="navbar bg-base-100 shadow-sm md:px-20">
  <div className="navbar-start">
    <h2 className='text-2xl'><span className='font-bold'>Keen</span>Keeper</h2>
  </div>
 
  <div className="navbar-end gap-1">
   <NavLink to={"/"} className={({isActive})=> 
    `${isActive ? "bg-[#244D3F] text-white btn" : "bg-[#FFFFFF] text-[#64748B] btn"}`}><i className="fa-regular fa-house"></i>Home</NavLink> 
   <NavLink to={"timeline"} className={({isActive})=> 
    `${isActive ? "bg-[#244D3F] text-white btn" : "bg-[#FFFFFF] text-[#64748B] btn"}`}><i className="fa-regular fa-clock"></i>Timeline</NavLink> 
   <NavLink to={"/status"} className={({isActive})=> 
    `${isActive ? "bg-[#244D3F] text-white btn" : "bg-[#FFFFFF] text-[#64748B] btn"}`}><i className="fa-solid fa-chart-line"></i>Status</NavLink> 
    
  </div>
</div>
        </div>
    );
};

export default Navbar;