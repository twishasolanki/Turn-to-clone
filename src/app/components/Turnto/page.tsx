'use client'
import ProfileCard from '@/app/components/ProfileCard';
import { useDrag } from '@use-gesture/react';
import { clsx } from "clsx";
import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { CiCalendar, CiFlag1, CiSettings, CiShare2 } from 'react-icons/ci';
import { GrDirections, GrMapLocation, GrUserSettings } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp, IoMdShare } from "react-icons/io";
import { MdBlockFlipped, MdLogout, MdOutlineDashboard, MdOutlineMenu } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import 'react-modern-drawer/dist/index.css';
import { useSpring } from 'react-spring';
import { RWebShare } from "react-web-share";
import Typewriter from 'typewriter-effect';
import { Drawer } from "vaul";
import SidebarContent from '../SidebarContent';
import SmallProfileCard from '../SmallProfileCard';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegBookmark, FaRegClock } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { LuDollarSign } from 'react-icons/lu';
import Map from '@/app/components/Map';
import { ImNewTab } from 'react-icons/im';
import { log } from 'console';

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
}

const TurnTo: React.FC<ShareButtonProps> = ({ title: string, text, url }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selecteditem, setSelectedItem] = useState<boolean>(false);
    const [activePopupId, setActivePopupId] = useState<number | null>(null);
    const [isOpendrawer, setIsOpenDrawer] = useState<boolean>(false);
    const [{ y }, api] = useSpring(() => ({ y: window.innerHeight }));
    const [isOpenmenu, setIsOpenmenu] = useState(false);
    const [snap, setSnap] = useState<number | string | null>("148px");
    const [selectedItemcard, setSelectedItemcard] = useState<number | null>(null);
    const [open, setOpen] = useState(true);

    const openDrawer = () => {
        setIsOpenDrawer(true);
        api.start({ y: 0 });
    };

    const closeDrawer = () => {
        setIsOpenDrawer(false);
        api.start({ y: window.innerHeight });
    };

    const bind = useDrag(({ last, movement: [, my], memo = y.get() }) => {
        if (last) {
            if (my < -50) openDrawer();
            else closeDrawer();
            return memo;
        } else {
            api.start({ y: my + memo, immediate: true });
            return memo;
        }
    });

    const toggleDrawer = () => {
        setIsOpenmenu(!isOpenmenu);
    };

    const closemenu = () => {
        setIsOpenmenu(false);
    };
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

    if (selectedItemcard !== null) {
        return <Map onBackClick={() => setSelectedItemcard(null)} 
        />
    }

    return (
        <>
            <div>
                <div className="p-1 md:flex md:flex-row flex-col md:w-full justify-center items-center w-screen md:mt-0 mt-1">
                    <div className="flex items-center md:max-w-lg md:ms-4 ms-5 md:me-0 me-8">
                        <div className="relative md:w-60 w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <img src='./assets/TurnTo.png' className='h-5 w-5' />
                                <div className='md:text-md text-sm'>
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
                                                .start();
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='flex w-full md:w-60'>
                                <input type="text" className="bg-gray-50 border  text-gray-900 text-sm rounded-l-lg  block w-full ps-24 md:p-2.5 p-1"
                                />
                                <button onClick={toggleDrawer} type="submit" className="md:hidden block absolute end-1 font-medium rounded-lg text-sm px-4 py-2 "><MdOutlineMenu /></button>
                            </div>
                        </div>
                    </div>
                    <form className="max-w-2xl mx-auto md:max-w-5xl flex items-center md:mt-0 mt-1 md:ms-0 ms-6 md:me-0 me-8">
                        <div className="flex md:w-60 w-full">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <IoLocationOutline className='bg-gray-50' />
                                </div>
                                <input type="search" id="default-search" className="block w-full p-1.5 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
                                <button type="submit" className="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg  ">
                                    <svg className="w-4 md:h-4 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>

                    <form className="max-w-xl mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
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
                <div className="flex mb-1 p-1 text-center ">
                    <button className="w-1/3 bg-blue-700 ms-3 py-2 rounded-lg text-white md:text-sm text-xs">last 15 days</button>
                    <button className="w-1/3 bg-blue-700 ms-3 rounded-lg text-white md:text-sm text-xs">within 20 miles</button>
                    <button className="w-1/3 bg-gray-100 ms-3 rounded-lg font-bold md:text-sm text-xs">Job Type</button>
                </div>
                <div className='ms-5'>
                    <button type="button" className="md:block hidden text-black bg-gray-100 rounded-lg md:text-md text-sm px-2 py-2 mb-1 font-bold">Latest Job</button>
                </div>
                <div className='flex md:justify-start justify-center md:items-start items-center'>
                    <div className='card-body md:mt-0 bg-white md:w-[60%] w-[80%] md:ms-5 ms-5 p-2 rounded-md md:me-0 me-8'>
                        <p className='text-gray-500 md:text-md md:text-sm text-xs'>2/2 Jobs in 360001, Rajkot, Gujarat, India</p>
                    </div>
                </div>
                <div className="flex mt-[70%] justify-center items-center md:hidden block">
                    <div className="relative md:h-screen h-[210px] overflow-hidden md:hidden block ">

                    </div>
                </div>

                <div className="md:hidden block ">
                    <Drawer.Root
                        snapPoints={["195px", "355px", 1]}
                        activeSnapPoint={snap}
                        setActiveSnapPoint={setSnap}
                    >
                        <Drawer.Trigger asChild className='md:hidden block'>
                            <div className='me-8'>
                                <button className=' bottom-5 right-10 h-8 w-20 rounded-lg px-2 py-1 font-bold bg-blue-700 text-center text-white fixed'>Job List</button>
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
                                    className={clsx("flex flex-col max-w-2xl h-full mx-auto w-screen p-2 pt-5", {
                                        "overflow-y-auto": snap === 1,
                                        "overflow-y-auto": snap !== 0,
                                    })}
                                >
                                    {/* <div className="flex md:hidden block">
                                        <SmallProfileCard />
                                    </div> */}
                                    <div className='md:hidden block'>
                                        <div className='flex w-screen justify-center items-center '>
                                            <div className='md:ms-0 md:mt-0 text-sm'>
                                                <div className="mt-3 w-full md:h-[calc(75vh-20px)] h-[calc(80vh-50vh)] md:overflow-y-scroll ">
                                                    {items.map((item) => (
                                                        <div key={item.id} className="block p-2 mt-3 bg-white border border-blue-200 rounded-lg shadow">
                                                            <div className="flex md:flex-row flex-col">

                                                                <div className="md:w-1/2" onClick={() => setSelectedItemcard(item.id)}>
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
                
                <div className='md:block hidden'>
                    <ProfileCard />
                </div>
            </div>
            <RWebShare
                data={{
                    text: text, title: title, url: url,
                }}>
                <div className='fixed bottom-7 2xl:left-[45%] xl:left-[53%] lg:left-[74%] md:left-[95%] mt-auto'>
                    <button className='ms-8 bg-gray-100 shadow-xl shadow-black rounded-md md:px-4 px-2 md:py-4 py-2 md:ms-5 card-body flex'><IoMdShare /></button>
                </div>
            </RWebShare>

        </>
    );
};

export default TurnTo;  
