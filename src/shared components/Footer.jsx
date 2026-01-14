import React from 'react';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="footer sm:footer-horizontal max-w-6xl mx-auto text-white p-10">
                <aside>
                    <p className='font-bold text-xl md:text-3xl mb-2 '>HomeNest</p>
                    <p className='text-[#FFFFFFB3]'>
                    <span>90 Fifth Avenue, 3rd Floor</span>
                    <br/>
                    <span className=''>San Francisco, CA 1980</span>
                    <br/>
                    <span className=''>(123) 456-7890</span>
                    </p>
                    <div className='mt-2  flex gap-6'>
                        <FaInstagram size={25}/>
                        <ImFacebook2 size={25}/>
                        <FaTwitter size={25}/>
                    </div>
                    <p className='mt-6'>Terms & Conditions and Privacy Policy</p>
                    <p className='text-[#FFFFFFB3]'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
                
                    <nav className='mt-3'>
                    <h6 className="text-lg font-semibold mb-2">Company</h6>
                    <Link className="hover:text-[#FFFFFFB3]">About us</Link>
                    <Link className="hover:text-[#FFFFFFB3]">Agents</Link>
                    <Link className="hover:text-[#FFFFFFB3]">Blog</Link>
                    <Link className="hover:text-[#FFFFFFB3]">Demos</Link>
                    <Link className="hover:text-[#FFFFFFB3]">Contuct Us</Link>
                </nav>
                <nav className='mt-3'>
                    <h6 className="text-lg font-semibold mb-2">Actions</h6>
                    <Link className="hover:text-[#FFFFFFB3]">Buy Properties</Link>
                    <Link className="hover:text-[#FFFFFFB3]">Rent Properties</Link>
                    <Link className="hover:text-[#FFFFFFB3]">Sell Properties</Link>
                </nav>
                <nav className='mt-3'>
                    <h6 className="text-lg font-semibold mb-2">Explore</h6>
                    <Link className="hover:text-[#FFFFFFB3]">Homes for Rent</Link>
                    <Link className="hover:text-[#FFFFFFB3]">Apartments for Rent</Link>
                    <Link className="hover:text-[#FFFFFFB3]">Homes for Sale</Link>
                    <Link className="hover:text-[#FFFFFFB3]">Apartments for Sale</Link>
                    <Link className="hover:text-[#FFFFFFB3]">CRM</Link>
                </nav>
              
            </footer>
        </div>
    );
};

export default Footer;