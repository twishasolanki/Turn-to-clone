'use client'
import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { ImNewTab } from "react-icons/im";
import { FaRegClock } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { GrDirections } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import {CiShare2} from "react-icons/ci"
import { FaRegBookmark } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import {MdBlockFlipped} from "react-icons/md";
import Map from '../Map';
import Sidebar from '../Sidebar';
import { RWebShare } from "react-web-share";
import { IoMdShare } from "react-icons/io";
import { title } from 'process';
import Typewriter from 'typewriter-effect';

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
}

const TurnTo: React.FC<ShareButtonProps> = ({ title: string, text, url }) => {
    const items: { id: number; title: string, subtitle: string, location: string, time: string, price: string, day: string, direction: string, min: string, content: string, login: string }[] = [
        {
            id: 1,
            title: 'Marketing Consultant',
            subtitle: 'Tailwind CSS Solution',
            location: 'Rajkot,360001',
            time: 'Part-Time',
            price: '1000-20000',
            day: '18 d ago',
            direction: '~3 - 4 Mi',
            min: '~5min',
            content: 'Turn-To AI Profile Match',
            login: 'Login To See Profile Matching'
        },
        {
            id: 2,
            title: 'Marketing Consultant',
            subtitle: 'Tailwind CSS Solution',
            location: 'Rajkot,360001',
            time: 'Part-Time',
            price: '1000-20000',
            day: '18 d ago',
            direction: '~3 - 4 Mi',
            min: '~5min',
            content: 'Turn-To AI Profile Match',
            login: 'Login To See Profile Matching'
        }
    ];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selecteditem, setSelectedItem] = useState<boolean>(false);
    const [activePopupId, setActivePopupId] = useState<number | null>(null);

    const togglePopup = (id: number) => {
        if (activePopupId === id) {
            setIsOpen(false);
            setActivePopupId(null);
        } else {
            setIsOpen(true);
            setActivePopupId(id);
        }
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

    return (
        <>
            <div>
                <div className="p-4 md:flex md:flex-row flex-col md:w-full justify-center items-center  w-screen">
                    <form className="flex items-center md:max-w-lg">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <img src='./assets/TurnTo.png' className='h-7 w-7' />
                                <div>
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                                .typeString('Travel Nurse Opportunitie')
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
                                                .start();        
                                        }}
                                    />
                                </div>
                            </div>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-24 p-2.5" />
                        </div>
                        <a href="/Sidebar"> <button type="submit" className=" items-center py-3 px-3 text-sm font-medium bg-white rounded-md right-r-xl md:hidden block">
                           <MdOutlineMenu />
                        </button></a>
                    </form>
                    <form className="flex items-center md:max-w-lg md:mt-0 mt-1 ">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <FaSearch className="w-4 h-4 text-gray-500" />
                            </div>
                            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search Mockups, Logos, Design Templates..." required />
                        </div>
                        <button type="submit" className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <FaSearch />
                        </button>
                    </form>
                </div>
                <div className='flex mx-auto md:justify-start md:items-start justify-center items-center ms-5'>
                    <button type="button" className="text-white bg-blue-700 font-medium rounded-lg md:text-md text-sm px-4 py-2 mb-2 focus:outline-none">last 15 days</button>
                    <button type="button" className="text-white ms-3 bg-blue-700 font-medium rounded-lg md:text-md text-sm px-4 py-2 mb-2 focus:outline-none">within 20 miles</button>
                    <button type="button" className="text-black ms-3 bg-gray-100 font-medium rounded-lg md:text-md text-sm px-4 py-2 mb-2 focus:outline-none">Job Type</button>
                </div>
                <div className='ms-5'>
                    <button type="button" className="md:block hidden text-black bg-gray-100 rounded-lg md:text-md text-sm px-4 py-2 mb-2 font-bold">Latest Job</button>
                </div>
                <div className='md:ms-0  md:mt-0 mt-64'>
                    <div className="mt-5  pl-4 pr-4 md:h-[calc(75vh-20px)] h-[calc(78vh-20px)] md:overflow-y-scroll">
                        {items.map((item) => (
                            <div key={item.id} className={selecteditem ? `hidden ` : `block max-w-lg p-2 mt-3 bg-white border border-blue-200 rounded-lg shadow`} >
                                <div className="flex md:flex-row flex-col">
                                    <div className="md:w-1/2" onClick={() => setSelectedItem(true)}>
                                        <p className="font-bold md:text-xl text-md">{item.title}</p>
                                    </div>
                                    <div className="md:w-1/2 flex justify-end relative">
                                        <button onClick={() => togglePopup(item.id)} className="text-gray-500 focus:outline-none">
                                            <BsThreeDotsVertical />
                                        </button>
                                    </div>
                                    {isOpen && activePopupId === item.id && (
                                        <div id="popupMenu" className="absolute md:right-[57%] right-[10%] mt-2 w-58 py-2 bg-white border border-gray-200 rounded-lg shadow-xl z-10">
                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100 "><CiShare2 className='mt-1' /><span className='ms-2'>Share This Job</span></a>
                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><ImNewTab className='mt-1' /><span className='ms-2'>Open In New Tab</span></a>
                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><MdBlockFlipped className='mt-1' /><span className='ms-2'>Not Intrested</span></a>
                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><CiFlag1 className='mt-1' /><span className='ms-2'>Problem With This Job?</span></a>
                                        </div>
                                    )}
                                </div>
                                <div className="flex">
                                    <div className="md:w-1/2">
                                        <p className="text-blue-400 md:text-lg text-sm">{item.subtitle}</p>
                                    </div>
                                    <div className="md:w-1/2 flex justify-end items-end">
                                        <FaRegBookmark />
                                    </div>
                                </div>
                                <div className="flex mt-1">
                                    <div className="md:w-1/4 flex">
                                        <IoLocationOutline />
                                        <p className="ms-1 text-sm">{item.location}</p>
                                    </div>
                                    <div className="md:w-1/4 flex ms-5">
                                        <FaRegClock />
                                        <p className="ms-1 text-sm">{item.time}</p>
                                    </div>
                                    <div className="md:w-1/4 flex">
                                        <LuDollarSign />
                                        <p className="text-sm">{item.price}</p>
                                    </div>
                                    <div className="md:w-1/4 flex">
                                        <CiCalendar />
                                        <p className="ms-1 text-sm">{item.day}</p>
                                    </div>
                                </div>
                                <div className="flex mt-2">
                                    <div className="md:w-28 flex">
                                        <GrDirections />
                                        <p className="ms-1 text-sm">{item.direction}</p>
                                    </div>
                                    <div className="md:w-1/2 ms-5 flex">
                                        <FaRegClock />
                                        <p className="ms-1 text-sm">{item.min}</p>
                                    </div>
                                </div>
                                <div className="md:text-lg text-xs font-bold mt-2 underline">{item.content}</div>
                                <div className="text-blue-400 md:text-lg text-xs font-medium">{item.login}</div>
                            </div>
                        ))}
                        {selecteditem && (
                            <>
                                <Map />
                            </>
                        )}
                    </div>
                </div>
            </div>
            <RWebShare
                data={{
                    text: text, title: title, url: url,
                }}>
                <div className='flex justify-start items-start'>
                    <button className='bg-gray-100 shadow-xl shadow-black rounded-md px-5 py-5 mt-auto ms-5 card-body flex'><IoMdShare /></button>
                </div>
            </RWebShare>
        </>
    );
};

export default TurnTo;

