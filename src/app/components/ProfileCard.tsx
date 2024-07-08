'use client'
import Map from '@/app/components/Map';
import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCalendar, CiFlag1, CiShare2 } from "react-icons/ci";
import { FaRegBookmark, FaRegClock } from "react-icons/fa";
import { GrDirections } from "react-icons/gr";
import { ImNewTab } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";
import { MdBlockFlipped } from "react-icons/md";
import 'react-modern-drawer/dist/index.css';

const ProfileCard: React.FC = () => {
    const items = [
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
        },
        {
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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
    ];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
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

    if (selectedItem !== null) {
        return <Map onBackClick={() => setSelectedItem(null)} />
    }

    return (
        <div>
            <div className='md:ms-0 md:mt-0 text-sm'>
                <div className="mt-3 pl-4 pr-4 md:h-[calc(80vh-20px)] h-[calc(80vh-50vh)] md:overflow-y-scroll scrollable-element ">
                    {items.map((item) => (
                        <div key={item.id} className="block max-w-lg p-2 mt-3 bg-white border border-blue-200 rounded-lg shadow">
                            <div className="flex md:flex-row flex-col">
                                <div className="md:w-1/2" onClick={() => setSelectedItem(item.id)}>
                                    <p className="font-bold md:text-md text-md ">{item.title}</p>
                                </div>
                                <div className="md:w-1/2 flex justify-end relative">
                                    <button onClick={() => togglePopup(item.id)} className="text-gray-500 focus:outline-none md:block hidden">
                                        <BsThreeDotsVertical />
                                    </button>
                                </div>
                                {isOpen && activePopupId === item.id && (
                                    <div className='flex justify-end items-end'>
                                        <div id="popupMenu" className="absolute  mt-2 w-58 py-2 bg-white border border-gray-200 rounded-lg shadow-xl z-10 text-sm">
                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100 "><CiShare2 className='mt-1' /><span className='ms-2'>Share This Job</span></a>
                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><ImNewTab className='mt-1' /><span className='ms-2'>Open In New Tab</span></a>
                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><MdBlockFlipped className='mt-1' /><span className='ms-2'>Not Interested</span></a>
                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><CiFlag1 className='mt-1' /><span className='ms-2'>Problem With This Job?</span></a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex">
                                <div className="md:w-1/2">
                                    <p className="text-blue-400 md:text-md text-xs">{item.subtitle}</p>
                                </div>
                                <div className="md:w-1/2 w-full flex justify-end items-end">
                                    <FaRegBookmark />
                                </div>
                            </div>
                            <div className="flex mt-1">
                                <div className="md:w-1/4 flex">
                                    <IoLocationOutline />
                                    <p className="ms-1 text-xs">{item.location}</p>
                                </div>
                                <div className="md:w-1/4 flex ms-5">
                                    <FaRegClock />
                                    <p className="ms-1 text-xs">{item.time}</p>
                                </div>
                                <div className="md:w-1/4 flex md:ms-0 ms-5">
                                    <LuDollarSign />
                                    <p className="text-xs">{item.price}</p>
                                </div>
                                <div className="md:w-1/4 flex ">
                                    <CiCalendar />
                                    <p className="ms-1 text-xs">{item.day}</p>
                                </div>
                            </div>
                            <div className="flex mt-2">
                                <div className="md:w-28 ms-3 flex">
                                    <GrDirections />
                                    <p className="ms-1 text-xs">{item.direction}</p>
                                </div>
                                <div className="md:w-1/2 ms-5 flex">
                                    <FaRegClock />
                                    <p className="ms-1 text-xs">{item.min}</p>
                                </div>
                            </div>
                            <div className="md:text-md text-xs font-bold mt-1 underline">{item.content}</div>
                            <div className="text-blue-400 md:text-md mt-1 text-xs font-medium">{item.login}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
