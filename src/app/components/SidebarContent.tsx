'use client'
import React, { useEffect, useRef, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa';
import { GrMapLocation, GrUserSettings } from 'react-icons/gr';
import { IoCloseSharp } from "react-icons/io5";
import { MdLogout, MdOutlineDashboard } from 'react-icons/md';
import { TbWorldSearch } from 'react-icons/tb';

const SidebarContent: React.FC = () => {
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const rightSidebarRef = useRef(null);

    const handleItemClick = (item: any) => {
        setActiveItem(item);
        setIsRightSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsRightSidebarOpen(false);
        setActiveItem(null);
    };

    const handleClickOutside = (event: any) => {
        if (rightSidebarRef.current && !rightSidebarRef.current.contains(event.target)) {
            handleCloseSidebar();
        }
    };
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const closePopup = () => {  
        setIsPopupOpen(false);
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
        <div
            className=" bg-white text-black  hover:w-72 h-screen relative ">
            <ul className="flex flex-col">
                <li className='flex hover:bg-[#5932EA] hover:text-white rounded-lg'>
                    <GrMapLocation className='mt-1 ms-2' />
                    <span className='ms-2'>Job Map</span>
                </li>
                <li className='flex  hover:bg-[#5932EA] hover:text-white mt-2 rounded-lg'
                    onClick={() => handleItemClick('Explorer')}>
                    <TbWorldSearch className='mt-1 ms-2' />
                    <span className='ms-2'>Explorer</span>
                </li>
                <li className='flex mt-2  hover:bg-[#5932EA] hover:text-white rounded-lg'>
                    <MdOutlineDashboard className='mt-1 ms-2' />
                    <span className='ms-2'>Job Management</span>
                </li>
                <li className='flex mt-2  hover:bg-[#5932EA] hover:text-white rounded-lg'>
                    <CiSettings className='mt-1 ms-2' />
                    <span className='ms-2'>Resources</span>
                </li>
                <li className='flex  hover:bg-[#5932EA] hover:text-white mt-2 rounded-lg'>
                    <GrUserSettings className='mt-1 ms-2' />
                    <span className='ms-2' >Account Settings</span>
                </li>
                <li className='flex hover:bg-[#5932EA] hover:text-white mt-2 rounded-lg'>
                    <MdLogout className='mt-1 ms-2' />
                    <span className='ms-2'>Log Out</span>
                </li>
            </ul>
            <div className='flex justify-center items-center absolute'>
                <img src='./assets/logo.png' className='mt-[300%] w-44 ms-5' />
            </div>
            {isRightSidebarOpen && (
                <div ref={rightSidebarRef} className="border border-black bg-gray-200 text-black sm:w-72 xs:w-64 h-screen fixed right-0 top-0">
                    <div className="p-4 flex justify-between items-center">
                        <button
                            className="text-gray-500 "
                            onClick={handleCloseSidebar}>
                            <IoCloseSharp />
                        </button>
                    </div>
                    <div className='border border-black w-44 rounded-md text-center flex justify-center items-center mx-auto'>
                        <button className='flex' onClick={togglePopup}>Companies Hiring <FaAngleDown className='mt-1 ms-2' /></button>
                    </div>
                    {isPopupOpen && (
                        <div className="popup-overlay h-screen fixed inset-0 flex items-center justify-center mx-auto bg-black bg-opacity-50 z-50">
                            <div className="popup-box bg-white mx-auto md:w-96 w-full mg:right-24 ms:right-16 right-8 p-4 shadow-lg rounded-md relative z-60">
                                <div className='flex justify-between items-start font-medium text-xl'>
                                      <p>Explorer</p>
                                    <button onClick={closePopup}><IoCloseSharp className='mt-1' /></button>
                                </div>
                                <hr className='mt-5' />
                                <form className='flex md:flex-row flex-col  mt-5 mb-8'>
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
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                        <div className="relative">
                            <input type="search" id="default-search" className="block w-64 mx-auto mt-3 p-3 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search History" required />
                        </div>
                    </form>
                    <div className='flex justify-center items-center absolute'>
                        <img src='./assets/logo.png' className='mt-[320%] w-44 ms-5' />
                    </div>
                </div>
            )}
        </div>
    );
}
export default SidebarContent;
