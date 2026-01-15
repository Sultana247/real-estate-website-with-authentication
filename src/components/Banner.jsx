import React from 'react';
import { IoMdArrowDropup, IoMdArrowDropdown  } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
const Banner = () => {
    return (
        <div className= ' bg-[url(https://i.pinimg.com/736x/96/fd/29/96fd292f181c96592387d7bf6125ade9.jpg)] h-screen bg-cover bg-no-repeat '>
            <div className=' p-40 pt-80'>
                <h1 className='  font-extrabold text-6xl text-white'>Find your future home</h1>
                <div className='mt-5 flex '>
                    <div className="dropdown dropdown-center w-1/3 ">
                        <div tabIndex={0} role="button" className=" btn w-1/2">
                            
                                <p className='navbar-start '>Buy</p>
                            <div className=''>
                                <IoMdArrowDropup/>
                                <IoMdArrowDropdown/>
                            
                            </div>
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Buy</a></li>
                            <li><a>Rent</a></li>
                        </ul>
                    </div >
                    <div className=' bg-white rounded-sm w-2/5 -ml-35 '>
                        <div className='flex  px-5 justify-between items-center'>
                            <input type="text" className="border-0 input" placeholder='Enter address'/>
                            <HiOutlineSearch/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;