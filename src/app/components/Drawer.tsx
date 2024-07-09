'use client'
import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiCalendar, CiFlag1, CiShare2 } from 'react-icons/ci';
import { FaRegBookmark, FaRegClock } from 'react-icons/fa';
import { GrDirections } from 'react-icons/gr';
import { IoLocationOutline } from 'react-icons/io5';
import { LuDollarSign } from 'react-icons/lu';
import { Drawer } from "vaul";
import { clsx } from "clsx";
import Map from './Map';
import { IoIosArrowDown } from 'react-icons/io';
import { ImNewTab } from 'react-icons/im';
import { MdBlockFlipped } from 'react-icons/md';

const Drawercard: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activePopupId, setActivePopupId] = useState<number | null>(null);
    const [snap, setSnap] = useState<number | string | null>("148px");
    const [selectedItemcard, setSelectedItemcard] = useState<number | null>(null);

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

    const togglePopup = (id: number) => {
        if (activePopupId === id) {
            setIsOpen(false);
            setActivePopupId(null);
        } else {
            setIsOpen(true);
            setActivePopupId(id);
        }
    };

    if (selectedItemcard !== null) {
        return <Map onBackClick={() => setSelectedItemcard(null)}
        />
    }
    return (
        <div className="md:hidden block ">
            <Drawer.Root
                snapPoints={["195px", "355px", 1]}
                activeSnapPoint={snap}
                setActiveSnapPoint={setSnap}
            >
                <Drawer.Trigger asChild className='md:hidden block'>
                    <div className='me-8'>
                        <button className=' bottom-5 right-5 h-8 w-20 rounded-lg px-2 py-1 font-bold bg-[#5932EA]  text-center text-white fixed'>Job List</button>
                    </div>
                </Drawer.Trigger>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 md:hidden block" />
                <Drawer.Portal>
                    <Drawer.Content className="md:hidden block fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]">
                        <Drawer.Trigger asChild className='md:hidden block'>
                            <div className='flex justify-center items-center mx-auto'>
                                <button className='w-full font-bold text-center'><IoIosArrowDown /></button>
                            </div>
                        </Drawer.Trigger>
                        <div
                            className={clsx("flex flex-col max-w-2xl h-full mx-auto w-screen p-2 pt-1", {
                                "overflow-y-auto": snap === 1,
                                "overflow-hidden": snap !== 0,
                            })}
                        >
                            <div className='md:hidden block'>
                                <div className='flex w-screen justify-center items-center '>
                                    <div className='md:ms-0 -ms-4 md:mt-0 text-sm'>
                                        <div className="mt-0 w-full md:h-[calc(75vh-20px)] h-[calc(80vh-50vh)] md:overflow-y-scroll ">
                                            {items.map((item) => (
                                                <div key={item.id} onClick={() => setSelectedItemcard(item.id)} className="block p-1 mt-3 bg-white border border-blue-200 rounded-lg shadow">
                                                    <div className="flex md:flex-row flex-col">
                                                        <div className="md:w-1/2">
                                                            <p className="font-bold md:text-md text-md ">{item.title}</p>
                                                        </div>
                                                        <div className="md:w-1/2 flex justify-end relative">
                                                            <button onClick={() => togglePopup(item.id)} className="text-gray-500 focus:outline-none md:block hidden">
                                                                <BsThreeDotsVertical />
                                                            </button>
                                                        </div>
                                                        {isOpen && activePopupId === item.id && (
                                                            <div id="popupMenu" className="absolute md:right-[57%] right-[10%] mt-2 w-58 py-2 bg-white border border-gray-200 rounded-lg shadow-xl z-10 text-sm">
                                                                <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100 "><CiShare2 className='mt-1' /><span className='ms-2'>Share This Job</span></a>
                                                                <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><ImNewTab className='mt-1' /><span className='ms-2'>Open In New Tab</span></a>
                                                                <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><MdBlockFlipped className='mt-1' /><span className='ms-2'>Not Interested</span></a>
                                                                <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><CiFlag1 className='mt-1' /><span className='ms-2'>Problem With This Job?</span></a>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex">
                                                        <div className="md:w-1/2 md:text-md text-xs">
                                                            <p className="text-blue-400 ">{item.subtitle}</p>
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
                                                        <div className="md:w-1/4 flex ms-3">
                                                            <FaRegClock />
                                                            <p className="ms-1 text-xs">{item.time}</p>
                                                        </div>
                                                        <div className="md:w-1/4 flex md:ms-0 ms-3">
                                                            <LuDollarSign />
                                                            <p className="text-xs">{item.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex mt-2">
                                                        <div className="md:w-1/4 flex ms-0 ">
                                                            <CiCalendar />
                                                            <p className="ms-1 text-xs">{item.day}</p>
                                                        </div>
                                                        <div className="md:w-28 ms-3 flex">
                                                            <GrDirections />
                                                            <p className="ms-1 text-xs">{item.direction}</p>
                                                        </div>
                                                        <div className="md:w-1/2 ms-3 flex">
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
                            </div>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    )
}
export default Drawercard;