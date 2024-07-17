'use client'
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa';
import { GrMapLocation, GrUserSettings } from 'react-icons/gr';
import { IoCloseSharp } from "react-icons/io5";
import { MdLogout, MdOutlineDashboard } from 'react-icons/md';
import { TbWorldSearch } from 'react-icons/tb';
    

function Sidebar() {
    const [isHovered, setIsHovered] = useState(false);
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup
    const rightSidebarRef = useRef(null);

    const handleItemClick = (item) => {
        setActiveItem(item);
        setIsRightSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsRightSidebarOpen(false);
        setActiveItem(null); // Reset active item when sidebar is closed
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleClickOutside = (event) => {
        if (rightSidebarRef.current && !rightSidebarRef.current.contains(event.target)) {
            handleCloseSidebar();
        }
    };

    useEffect(() => {
        if (isRightSidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isRightSidebarOpen]);

    return (
        <div className="flex md:block hidden">
            <div
                className="sidebar bg-white text-black w-16 hover:w-72 h-screen relative transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <ul className="flex flex-col space-y-2 p-4">
                    <li className="p-2 text-black rounded-md flex items-center space-x-4 ">
                        {isHovered ? (
                            <img src='./assets/logo.png' alt="Logo" className="w-36 rounded-md " />
                        ) : (
                            <AiOutlineMenu />
                        )}
                    </li>
                    <li
                        className="text-black p-2 rounded-md flex items-center space-x-4 hover:bg-[#5932EA] hover:text-white mt-3"
                    >
                        <GrMapLocation />
                        <span className={`sidebar-label hidden ${isHovered ? 'inline opacity-100' : 'opacity-0'} transition-opacity duration-300`}>Job Map</span>
                    </li>
                    <li
                        className="text-black p-2 rounded-md flex items-center space-x-4 hover:bg-[#5932EA] hover:text-white"
                        onClick={() => handleItemClick('Explorer')}
                    >
                        <TbWorldSearch />
                        <span className={`sidebar-label hidden ${isHovered ? 'inline opacity-100' : 'opacity-0'} transition-opacity duration-300`}>Explorer</span>
                    </li>
                    <li
                        className="text-black p-2 rounded-md flex items-center space-x-4 hover:bg-[#5932EA] hover:text-white"
                    >
                        <MdOutlineDashboard />
                        <span className={`sidebar-label hidden ${isHovered ? 'inline opacity-100' : 'opacity-0'} transition-opacity duration-300`}>Job Management</span>
                    </li>
                    <li
                        className="text-black p-2 rounded-md flex items-center space-x-4 hover:bg-[#5932EA] hover:text-white"
                    >
                        <CiSettings />
                        <span className={`sidebar-label hidden ${isHovered ? 'inline opacity-100' : 'opacity-0'} transition-opacity duration-300`}>Resources</span>
                    </li>
                    <li
                        className="text-black p-2 rounded-md flex items-center space-x-4 hover:bg-[#5932EA] hover:text-white"
                    >
                        <GrUserSettings />
                        <span className={`sidebar-label hidden ${isHovered ? 'inline opacity-100' : 'opacity-0'} transition-opacity duration-300`}>Account Settings</span>
                    </li>
                    <li
                        className="text-black p-2 rounded-md flex items-center space-x-4 hover:bg-[#5932EA] hover:text-white"
                    >
                        <MdLogout />
                        <span className={`sidebar-label hidden ${isHovered ? 'inline opacity-100' : 'opacity-0'} transition-opacity duration-300`}>Log Out</span>
                    </li>
                </ul>
            </div>
   
            {isRightSidebarOpen && (
                <div ref={rightSidebarRef} className="right-sidebar bg-gray-200 text-black w-80 h-screen absolute right-0 top-0 transition-all duration-300">
                    <div className="p-4 flex justify-between items-center">
                        <button
                            className="text-gray-500 hover:text-gray-800 focus:outline-none"
                            onClick={handleCloseSidebar}>
                            <IoCloseSharp />
                        </button>
                    </div>
                    <div className='border border-black w-44 rounded-md text-center flex justify-center items-center mx-auto'>
                        <button className='flex' onClick={togglePopup}>Companies Hiring <FaAngleDown className='mt-1 ms-2' /></button>
                    </div>

            
                    {isPopupOpen && (
                        <div className="popup-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="popup-box bg-white mx-auto w-96  p-4 shadow-lg rounded-md relative z-60">
                                <div className='flex justify-between items-start font-medium text-xl'>
                                    <p>Explorer</p>
                                    <button onClick={closePopup}><IoCloseSharp className='mt-1' /></button>
                                </div>
                                <hr className='mt-5' />
                                <form className='flex justify-between mt-5 mb-8'>
                                    <div className='flex items-center'> 
                                        <input type="radio" id="option1" name="option" defaultValue="option1" />
                                        <label htmlFor="option1" className='ml-2'>Companies Hiring</label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="radio" id="option2" name="option" defaultValue="option2" />
                                        <label htmlFor="option2" className='ml-2'>Popular Cities</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <form className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <input type="search" id="default-search" className="block w-64 mx-auto mt-3 p-3 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search History" required />
                        </div>
                    </form>
                    <div className='flex justify-center items-center'>
                        <img src='./assets/logo.png' className=' mt-[185%] w-44' />
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default Sidebar;
