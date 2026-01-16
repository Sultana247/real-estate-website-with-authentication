import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router';
import { FaRegUser } from "react-icons/fa";
import { AuthContext } from '../provider/AuthContext';
import './header.css'
const Header = () => {
    const navbarItems = <>
        <li className='link link-hover'><NavLink  to='/'>HOME</NavLink></li>
        <li>
            <div className="dropdown dropdown-hover link link-hover">
                <div tabIndex={0} role="button" className="">PROPERTIES</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-black rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><NavLink>All Properties</NavLink></li>
                    <li><NavLink>Single Property</NavLink></li>
                    <li><NavLink>Submit New Property</NavLink></li>
                </ul>
            </div>
        </li>
        <li>
            <div className="dropdown dropdown-hover link link-hover">
                <div tabIndex={0} role="button" className="">AGENT</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-black rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><NavLink>All Agents</NavLink></li>
                    <li><NavLink>Single Agent</NavLink></li>
                </ul>
            </div>
        </li>
        <li>
            <div className="dropdown dropdown-hover link link-hover">
                <div tabIndex={0} role="button" className="">BLOG</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-black rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><NavLink>All Blog Posts</NavLink></li>
                    <li><NavLink>Single Blog Posts</NavLink></li>
                </ul>
            </div>
        </li>
        <li className='link link-hover'><NavLink>CONTACT US</NavLink></li>
        
    </>
    // logout
    const {logout, user}= useContext(AuthContext);
    const handleLogout = ()=>{
        logout()
        .then(()=>console.log("logeed out successfully"))
        .catch(error=>console.log(error.message))
    }
    return (
       <div className='relative  text-white mt-2'>
            <div className='bg-black fixed top-0 right-0 left-0    p-2 '>
                <div className=" navbar text-white   max-w-6xl mx-auto  ">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-bold shadow">
                            {navbarItems}
                        </ul>
                        </div>
                        <a className="font-bold text-xl md:text-3xl">HomeNest</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-bold">
                        {navbarItems}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-3">
                        {user ? 
                        <>
                            <Link to='/userprofile'>
                                <div className=''>
                                    <img src={user.photoURL}  className='relative myProfile size-8' alt="" />
                                    <p className='absolute -top-2 hide text-[12px] bg-white text-black rounded-sm p-1'>{user.displayName}</p>
                                </div>

                            </Link>
                            <button className='btn' onClick={handleLogout}>SignOut</button>
                        </>
                        
                        :
                        <Link to='/login'>
                            <div className='hover:bg-white hover:text-black rounded-full border border-white p-3 flex justify-center items-center'>
                                <FaRegUser/>
                            </div>
                        </Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;