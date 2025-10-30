import React, { useState } from 'react';
import logoimg from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

import githubimg from '../../assets/github.png'
import menuimg from '../../assets/menu1.PNG'
import crossimg from '../../assets/cross.PNG'


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-20">
            <div className="navbar-start">

                 <span className='flex md:hidden' onClick={() => setOpen(!open)}>
            {open ? <img className='h-[35px] w-[35px] mr-2' src={crossimg} alt="" /> : <img className='h-[35px] w-[35px] mr-2 bg-white' src={menuimg} alt="" /> }
             <ul className={`flex flex-col md:hidden absolute duration-1000 ${open ? 'top-12' : '-top-40'} bg-[#632EE3] p-2 text-white`}>
                <NavLink to='/' className={({ isActive }) => 
                isActive ? "font-bold text-[#000000]" : "hover:text-[#632EE3]"}>Home</NavLink>
                <NavLink to='/allapps' className={({ isActive }) => 
                isActive ? "font-bold text-[#000000]" : "hover:text-[#632EE3]"}>Apps</NavLink>
                <NavLink to='/installation' className={({ isActive }) => 
                isActive ? "font-bold text-[#000000]" : "hover:text-[#632EE3]"}>Installation</NavLink>
             </ul>
           </span>
            
                <NavLink to='/'>
                    <div className='flex items-center'>
                    <img className='h-[35px] w-[35px] mr-2' src={logoimg} alt="" />
                    <a className="font-bold text-xl">HERO.IO</a>
                </div>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex gap-5 font-semibold">
               <NavLink to='/' className={({ isActive }) => 
                isActive ? "font-bold underline text-[#632EE3]" : "hover:text-[#632EE3]"}>Home</NavLink>
                <NavLink to='/allapps' className={({ isActive }) => 
                isActive ? "font-bold underline text-[#632EE3]" : "hover:text-[#632EE3]"}>Apps</NavLink>
                <NavLink to='/installation' className={({ isActive }) => 
                isActive ? "font-bold underline text-[#632EE3]" : "hover:text-[#632EE3]"}>Installation</NavLink>
            </div>
            <div className="navbar-end">
                <NavLink to='https://github.com/fahim793'><button className='flex text-white rounded-xl btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'><img className='h-[25px] w-[25px] rounded-full text-white' src={githubimg} alt="" />Contribute</button></NavLink>
            </div>
        </div>
    );
};

export default Navbar;