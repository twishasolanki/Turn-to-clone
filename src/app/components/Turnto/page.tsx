'use client'
import Map from '@/app/components/Map';
import ProfileCard from '@/app/components/ProfileCard';
import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { GrMapLocation, GrUserSettings } from "react-icons/gr";
import { IoMdShare } from "react-icons/io";
import { IoLocationOutline } from 'react-icons/io5';
import { MdLogout, MdOutlineDashboard, MdOutlineMenu } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import 'react-modern-drawer/dist/index.css';
import { RWebShare } from "react-web-share";
import Typewriter from 'typewriter-effect';
import Drawercard from '../Drawer';
import SidebarContent from '../SidebarContent';

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
}

const TurnTo: React.FC<ShareButtonProps> = ({ title: string, text, url }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activePopupId, setActivePopupId] = useState<number | null>(null);
    const [isOpenmenu, setIsOpenmenu] = useState(false);
    const [snap, setSnap] = useState<number | string | null>("148px");
    const [selectedItemcard, setSelectedItemcard] = useState<number | null>(null);
    const [open, setOpen] = useState(true);


    const toggleDrawer = () => {
        setIsOpenmenu(!isOpenmenu);
    };

    const closemenu = () => {
        setIsOpenmenu(false);
    };
  
    const handleClickOutside = (event: MouseEvent) => {
        const popup = document.getElementById("popupMenu");
        if (popup && !popup.contains(event.target as Node)) {
            setIsOpen(false);
            setActivePopupId(null);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

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

    if (selectedItemcard !== null) {
        return <Map onBackClick={() => setSelectedItemcard(null)}
        />
    }

    return (
        <>
            <div className="flex flex-row flex-col scrollhide">
                <div className=" md:flex md:flex-row flex-col md:w-full md:mt-0 mt-1 w-screen">
                    <div className="flex mt-2  md:max-w-lg md:ms-4 ms-6 md:me-0 me-8">
                        <div className="relative md:w-60 w-full ">
                            <div className="absolute inset-y-0 start-0 flex  ps-3 pointer-events-none ">
                                <img src='./assets/TurnTo.png' className='h-5 w-5 md:mt-2 mt-1' />
                                <div className='md:text-md text-sm md:mt-2 mt-1'>
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                                .typeString('Travel Nurse Opportunities')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .typeString('School Psychologist Position')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .typeString('Direct Care Work Position')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .typeString('Hair Styleist Jobs')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .typeString('Roofing Manager Creers')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .typeString('Field Data Collector Jobs')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .typeString('Senior Project Manager')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .typeString('Customer Service')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .typeString('Side gig Opertunities')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .start();
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='flex w-full md:w-60'>
                                <input type="text" className="bg-gray-50 border  text-gray-900 text-sm rounded-md md:rounded-l-lg  block w-full ps-24 md:p-2.5 p-1"
                                />
                                <button onClick={toggleDrawer} type="submit" className="md:hidden block absolute end-1 font-medium rounded-lg text-sm px-4 py-2 "><MdOutlineMenu /></button>
                            </div>
                        </div>
                    </div>
                    <form className="max-w-2xl mx-auto md:max-w-xl flex  md:mt-0 mt-1 md:ms-0 ms-6 md:me-0 me-8">
                        <div className="flex md:w-64 w-full ">
                            <div className="relative w-full md:mt-2">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <IoLocationOutline className='bg-gray-50' />
                                </div>
                                <input type="search" id="default-search" className="block w-full md:p-2.5 p-1.5 ps-8 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50  " placeholder="360001, Rajkot, Gujrat" required />
                                <button type="submit" className="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-[#5932EA]     rounded-e-md  ">
                                    <svg className="w-4 md:h-4 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="flex md:hidden block absolute h-screen md:ms-0 ms-5 md:me-0 me-8">
                        {isOpenmenu && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50"
                                onClick={closemenu}
                            />
                        )}
                        <div
                            className={`md:hidden block fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transition-transform transform ${isOpenmenu ? 'translate-x-0' : 'translate-x-full'}`}
                        >
                            <div className="p-8">
                                <SidebarContent menuItems={menuItems} open={open} />
                                <img src='./assets/logo.png' alt="Logo" className="mt-64" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex md:ms-2 relative md:justify-normal justify-center items-center mx-3 md:mt-0 mt-1 md:me-0 me-10 overflow-x-scroll md:w-full w-[60%] md:h-12 h-9 scrollhide md:overflow-hidden whitespace-nowrap">
                    <button className="inline-flex items-center justify-center md:px-3 px-5 md:py-2 h-7 md:ms-3 ms-28 bg-[#5932EA]  rounded-lg text-white md:text-xs text-xs">last 15 days</button>
                    <button className="inline-flex items-center justify-center md:px-3 px-5 py-2 h-7 bg-[#5932EA] ms-3 rounded-lg text-white md:text-xs text-xs">within 20 miles</button>
                    <button className="inline-flex items-center justify-center md:px-3 px-5 py-2 h-7 bg-gray-100 ms-3 rounded-lg font-bold md:text-xs text-xs">Job Type</button>
                    <button className="inline-flex items-center justify-center md:px-3 px-5 py-2 h-7 bg-gray-100 ms-3 rounded-lg font-bold md:text-xs text-xs">Explorer</button>
                </div>

                <div className='ms-5 relative'>
                    <button type="button" className="md:block hidden text-black bg-gray-100 rounded-lg md:text-md text-sm px-2 py-2 mb-1 font-bold">Latest Job</button>
                </div>

                {/* <div className='flex mx-auto justify-start items-start'>
                    <div className='card-body md:mt-0 bg-white md:w-[60%] w-full  md:ms-5  p-2 rounded-md'>
                        <p className='text-gray-500 md:text-md md:text-sm text-xs'>2/2 Jobs in 360001, Rajkot, Gujarat, India</p>
                    </div>
                </div>  */}
                <div className='absolute'>
                    <Drawercard />
                </div>
                <div className='md:block hidden '>
                    <ProfileCard />
                </div>
            </div>
            
            <RWebShare
                data={{
                    text: text, title: title, url: url,
                }}>
                <div className='fixed bottom-7 2xl:left-[45%] xl:left-[53%] lg:left-[74%] md:left-[95%] mt-auto'>
                    <button className='ms-2 bg-gray-100 shadow-xl shadow-black rounded-md md:px-4 px-2 md:py-4 py-2 md:ms-5 card-body flex'><IoMdShare /></button>
                </div>
            </RWebShare>
        </>
    );
};

export default TurnTo;  
