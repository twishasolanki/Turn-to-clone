'use client'
import Drawercard from '@/app/components/Drawer';
import Map from '@/app/components/Map';
import ProfileCard from '@/app/components/ProfileCard';
import React, { useEffect, useState } from 'react';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMenu } from "react-icons/md";
import { RWebShare } from "react-web-share";
import Typewriter from 'typewriter-effect';
import SidebarContent from '../SidebarContent';

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
}

const TurnTo: React.FC<ShareButtonProps> = ({ title, text, url }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activePopupId, setActivePopupId] = useState<number | null>(null);
    const [isOpenmenu, setIsOpenmenu] = useState(false);
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

    if (selectedItemcard !== null) {
        return <Map onBackClick={() => setSelectedItemcard(null)} />;
    }

    return (
        <>
            <div className="flex flex-row flex-col scrollhide">
                <div className="md:flex md:flex-row flex-col md:w-full md:mt-0 mt-1 w-screen">
                    <div className="flex mt-2 md:max-w-lg md:ms-4 ms-2 md:me-0 me-3">
                        <div className="relative md:w-60 w-full">
                            <div className="absolute inset-y-0 start-0 flex ps-3 pointer-events-none">
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
                                                .typeString('Hair Stylist Jobs')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .typeString('Roofing Manager Careers')
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
                                                .typeString('Side gig Opportunities')
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .start();
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='flex w-full md:w-60'>
                                <input type="text" className="bg-white text-gray-900 text-sm md:rounded-e-none rounded-md block w-full ps-10 md:p-2.5 p-1 rounded-e-xs" />
                                <button onClick={toggleDrawer} type="submit" className="md:hidden block absolute end-1 font-medium text-sm px-4 py-2">
                                    <MdOutlineMenu />
                                </button>
                            </div>
                        </div>
                    </div>
                    <form className="max-w-2xl mx-auto md:max-w-xl flex md:mt-0 mt-1 md:ms-0 ms-2 md:me-0 me-3">
                        <div className="flex md:w-64 w-full">
                            <div className="relative w-full md:mt-2">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <IoLocationOutline className='bg-gray-200' />
                                </div>
                                <input type="search" id="default-search" className="block w-full md:p-2.5 p-1 md:ps-8 ps-10 text-sm text-gray-900 border md:rounded-none md:w-[85%] rounded-md bg-gray-200" placeholder="360001, Rajkot, Gujarat" required />
                                <button type="submit" className="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-[#5932EA] rounded-e-md">
                                    <svg className="w-4 md:h-4 h-4 -mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="flex md:hidden block absolute h-screen md:ms-0 ms-5 md:me-0 me-8">
                        {isOpenmenu && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={closemenu} />
                        )}
                        <div className={`md:hidden block fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transition-transform transform ${isOpenmenu ? 'translate-x-0' : 'translate-x-full'} z-30`}>
                            <div className="p-8">       
                                <SidebarContent />
                                <img src='./assets/logo.png' alt="Logo" className="mt-64" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex ms-2 relative mt-1 md:ms-5 text-center text-xs ">
                    <div className="bg-[#5932EA] p-2 md:w-28 w-[100px] h-7 rounded-lg text-white font-bold">Last 15 days</div>
                    <div className="bg-[#5932EA] p-2 md:w-36 w-[120px] rounded-lg ms-1 h-7 text-white font-bold">Within 20 miles</div>
                    <div className="bg-gray-100 p-2 md:w-24 w-[78px] rounded-lg ms-1 h-7 font-bold">Job Type</div>
                    <div className="bg-gray-100 p-2 md:w-24 rounded-lg ms-1 h-7 font-bold md:block hidden">Explorer</div>
                </div>
                <div className='ms-5 relative mt-1'>
                    <button type="button" className="md:block hidden text-black bg-gray-100 rounded-lg md:text-md text-sm h-7 p-1 w-24 mb-1 font-bold">Latest Job</button>
                </div>
                <div className='flex relative justify-start items-start md:p-0 ms-3 p-2 md:block hidden'>
                    <div className='card-body md:mt-0 bg-white md:w-[60%] w-full md:ms-2 h-8 rounded-md'>
                        <p className='text-gray-500 md:text-md md:text-sm text-xs ms-1 p-1'>2/2 Jobs in 360001, Rajkot, Gujarat, India</p>
                    </div>
                </div>
                <div className='absolute md:hidden block'>
                    <Drawercard />
                </div>
                <div className='md:block hidden'>
                    <ProfileCard />
                </div>
            </div>
            <RWebShare data={{ text: text, title: title, url: url }}>
                <div className='fixed bottom-6 2xl:left-[45%] xl:left-[53%] lg:left-[74%] md:left-[95%] mt-auto'>
                    <button className='ms-2 bg-gray-100 shadow-xl shadow-black rounded-md md:px-4 px-2 md:py-4 py-2 md:ms-5 card-body flex'>
                        <IoMdShare />
                    </button>
                </div>
            </RWebShare>
            <div className='fixed bottom-6 2xl:left-[95%] xl:left-[95%] lg:left-[93%] md:left-[100%] mt-auto'>
                <button className='relative mg:ms-48 ms:ms-40 xd:ms-36 bg-gray-100 shadow-xl shadow-black rounded-md md:px-4 px-2 md:py-4 py-2 md:ms-5 card-body flex'>
                    <FaLocationCrosshairs />
                </button>
            </div>
        </>
    );
};

export default TurnTo;
