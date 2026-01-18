import React from 'react';
import { IoMdArrowDropup, IoMdArrowDropdown  } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import {Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className=''>
            <SwiperSlide>
                <div className= '  bg-[url(https://i.ibb.co.com/chBZwXJ0/slide1.jpg)] h-screen bg-cover bg-no-repeat '>
                    <div className='p-10 lg:p-40 pt-45 lg:pt-80'>
                        <h1 className='  font-extrabold text-6xl text-white'>Find your future home</h1>
                        <div className=' mt-5 flex  '>
                            {/* dropdown */}
                           
                                <div className="dropdown dropdown-click w-1/4 ">
                                    <button className="btn m-1 w-1/2">
                                        Buy
                                        <span>
                                            <IoMdArrowDropup/>
                                            <IoMdArrowDropdown/>
                                        </span>
                                            
                                        
                                    </button>

                                    <ul className="dropdown-content menu z-1 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Buy</a></li>
                                        <li><a>Rent</a></li>
                                    </ul>
                                </div>       
                           
                            <div className=' bg-white rounded-sm w-2/5 -ml-35 p-1 '>
                                <div className='flex  px-5 justify-between items-center'>
                                    <input type="text" className="border-0 input " placeholder='Enter address'/>
                                    <HiOutlineSearch/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className= ' bg-[url(https://i.ibb.co.com/HTspd4M3/slide2.jpg)] h-screen bg-cover bg-no-repeat '>
                    <div className=' p-10 lg:p-40 pt-45 lg:pt-80'>
                        <h1 className='  font-extrabold text-xl lg:text-6xl text-white'>Find your future home</h1>
                         <div className=' mt-5 flex  '>
                            {/* dropdown */}
                           
                                <div className="dropdown dropdown-click w-1/4 ">
                                    <button className="btn m-1 w-1/2">
                                        Buy
                                        <span>
                                            <IoMdArrowDropup/>
                                            <IoMdArrowDropdown/>
                                        </span>
                                            
                                        
                                    </button>

                                    <ul className="dropdown-content menu z-1 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Buy</a></li>
                                        <li><a>Rent</a></li>
                                    </ul>
                                </div>       
                           
                            <div className=' bg-white rounded-sm w-2/5 -ml-35 p-1 '>
                                <div className='flex  px-5 justify-between items-center'>
                                    <input type="text" className="border-0 input " placeholder='Enter address'/>
                                    <HiOutlineSearch/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className= ' bg-[url(https://i.ibb.co.com/MDjrQfWC/slide3.jpg)] h-screen bg-cover bg-no-repeat '>
                    <div className=' p-10 lg:p-40 pt-45 lg:pt-80'>
                        <h1 className='  font-extrabold text-6xl text-white'>Find your future home</h1>
                         <div className=' mt-5 flex  '>
                            {/* dropdown */}
                           
                                <div className="dropdown dropdown-click w-1/4 ">
                                    <button className="btn m-1 w-1/2">
                                        Buy
                                        <span>
                                            <IoMdArrowDropup/>
                                            <IoMdArrowDropdown/>
                                        </span>
                                            
                                        
                                    </button>

                                    <ul className="dropdown-content menu z-1 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Buy</a></li>
                                        <li><a>Rent</a></li>
                                    </ul>
                                </div>       
                           
                            <div className=' bg-white rounded-sm w-2/5 -ml-35 p-1 '>
                                <div className='flex  px-5 justify-between items-center'>
                                    <input type="text" className="border-0 input " placeholder='Enter address'/>
                                    <HiOutlineSearch/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </SwiperSlide>
        </Swiper>
        
        </>
        
    );
};

export default Banner;