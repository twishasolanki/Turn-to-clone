'use client'
import React, { useState } from 'react';
import { MdMenuOpen } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineDashboard } from 'react-icons/md';
import { MdLogout } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import { TbWorldSearch } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";


interface MenuItem {
    icons: React.ReactNode;
    label: string;
}

const menuItems: MenuItem[] = [
    {
        icons: <GrMapLocation size={30} />,
        label: 'Job Map'
    },
    {
        icons: <TbWorldSearch size={30} />,
        label: 'Explorer'
    },
    {
        icons: <MdOutlineDashboard size={30} />,
        label: 'Job Management'
    },
    {
        icons: <CiSettings size={30} />,
        label: 'Resources'
    },
    {
        icons: <GrUserSettings size={30} />,
        label: 'Account Settings'
    },
    {
        icons: <MdLogout size={30} />,
        label: 'Log Out'
    },
];

const Sidebar:React.FC=() =>{
    const [open, setOpen] = useState(true);
    return (
        <>
            <nav className={`shadow-md min-h-screen position-fixed md:block hidden p-2  flex-col duration-500 bg-gray-200 text-black ${open ? 'w-64' : 'w-16'}`}>
                <div className=" px-3 py-2 h-20 flex justify-between items-center">
                    <img src='./assets/logo.png' alt="Logo" className={`${open ? 'w-32 md:block' : 'w-10 hidden'} rounded-md`} />
                    <div>
                        <MdMenuOpen size={34} className={` duration-500 cursor-pointer ${!open && ' rotate-180'}`} onClick={() => setOpen(!open)} />
                    </div>
                </div>
                <ul className="flex-1">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
                        >
                            <div>{item.icons}</div>
                            <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                            <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}
                            >
                                {item.label}
                            </p>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
export default Sidebar;
