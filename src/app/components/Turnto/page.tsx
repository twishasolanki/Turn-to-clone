'use client'
import { Drawer } from "vaul";
import { clsx } from "clsx";
import ProfileCard from '@/app/components/ProfileCard';
import { useDrag } from '@use-gesture/react';
import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { FaSearch } from "react-icons/fa";
import { GrMapLocation, GrUserSettings } from "react-icons/gr";
import { IoIosArrowDown, IoMdShare } from "react-icons/io";
import { MdLogout, MdOutlineDashboard, MdOutlineMenu } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import 'react-modern-drawer/dist/index.css';
import { animated, useSpring } from 'react-spring';
import { RWebShare } from "react-web-share";
import Typewriter from 'typewriter-effect';
import SidebarContent from '../SidebarContent';
import SmallProfileCard from '../SmallProfileCard';
import { IoIosArrowUp } from "react-icons/io";



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
    ];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selecteditem, setSelectedItem] = useState<boolean>(false);
    const [activePopupId, setActivePopupId] = useState<number | null>(null);
    const [isOpendrawer, setIsOpenDrawer] = useState<boolean>(false);
    const [{ y }, api] = useSpring(() => ({ y: window.innerHeight }));

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

    const [isOpenmenu, setIsOpenmenu] = useState(false);
    const [snap, setSnap] = useState<number | string | null>("148px");
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
    const [open, setOpen] = useState(true);

    return (
        <>
            <div >
                <div className="p-1 md:flex md:flex-row flex-col md:w-full justify-center items-center w-screen md:mt-0 mt-1">
                    <div className="flex items-center md:max-w-lg md:ms-4 ms-5 md:me-0 me-5">
                        <div className="relative w-full">
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
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-24 p-2.5" />
                        </div>
                        <button
                            onClick={toggleDrawer}
                            className="items-center py-3 px-3 text-sm font-medium bg-white rounded-md right-r-xl md:hidden block"
                        >
                            <MdOutlineMenu />
                        </button>
                    </div>
                    <div className="flex md:hidden block absolute h-screen md:ms-0 ms-5 md:me-0 me-5">
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
                    <form className="flex items-center md:max-w-lg md:mt-0 mt-1  md:ms-0 ms-6 md:me-0 me-5">
                        <div className=" w-full">
                            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps- p-2.5" placeholder="Search Mockups, Logos, Design Templates..." required />
                        </div>
                        <button type="submit" className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <FaSearch />
                        </button>
                    </form>
                </div>
                <div className='flex md:mx-5 md:me-0 me-5 md:ms-5 ms-5 md:mt-0 mt-1 md:justify-start md:items-start justify-center items-center '>
                    <button type="button" className="md:w-32 w-1/2 text-white bg-blue-700 font-medium rounded-lg md:text-md text-sm md:px-5  px-2 py-3 p-1 md:py-2 mb-1 focus:outline-none">last 15 days</button>
                    <button type="button" className="md:w-36 w-1/2 text-white ms-3 bg-blue-700 font-medium rounded-lg md:text-md text-sm md:px-0 sm:px-14 px-2 py-3  p-1 md:py-2 mb-1 focus:outline-none">within 20 miles</button>
                    <button type="button" className="text-black ms-3 bg-gray-100 font-medium rounded-lg md:text-md text-sm md:px-4 p-1 py-2 mb-1 focus:outline-none md:block hidden">Job Type</button>
                </div>
                <div className='ms-5'>
                    <button type="button" className="md:block hidden text-black bg-gray-100 rounded-lg md:text-md text-sm px-2 py-2 mb-1 font-bold">Latest Job</button>
                </div>
                <div className='card-body md:mt-0 mt-1 bg-white md:w-[56%] w-[90%] ms-5 p-2 rounded-md md:me-0 me-5'>
                    <p className='text-gray-500 md:text-md text-sm'>2/2 Jobs in 360001, Rajkot, Gujarat, India</p>
                </div>
                <div className="flex mt-[38%] justify-center items-center md:hidden block  ">
                    <div className="relative md:h-screen h-[280px] overflow-hidden md:hidden block ">
                        {/* <animated.div
                            className="fixed bottom-0 left-0 w-full bg-white shadow-lg"
                            style={{ y, height: '100vh' }}
                        >
                            <div className="flex justify-center p-4 bg-gray-300 text-white">
                                <button onClick={closeDrawer}><IoIosArrowDown className='text-black font-bold' /></button>
                            </div>
                            <SmallProfileCard />
                        </animated.div>
                        <animated.div
                            className={`${isOpendrawer ? 'hidden' : 'block'} fixed bottom-0 left-0 w-full flex justify-center p-4 bg-gray-300 text-black font-bold `}
                            {...bind()}
                            style={{ y: isOpendrawer ? - 40 : 0 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                        </animated.div> */}
                    </div>
                </div>
                <Drawer.Root
                    snapPoints={["148px", "355px", 1]}
                    activeSnapPoint={snap}
                    setActiveSnapPoint={setSnap}
                >
                    <Drawer.Trigger asChild>
                            <button className="bg-gray-300 w-full text-center md:hidden block p-5 font-bold">
                                <div className="flex justify-center items-center">
                                    <IoIosArrowUp className="h-5 w-10 " />
                                </div>
                            </button>
                    </Drawer.Trigger>
                    <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                    <Drawer.Portal>
                        <Drawer.Content className="fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]">
                            <div
                                className={clsx("flex flex-col max-w-2xl mx-auto w-full p-4 pt-1 justify-center items-center", {
                                    "overflow-hidden": snap === 1,
                                    "overflow-hidden": snap !== 1,
                                })}
                            >
                                <div className="">
                                    <SmallProfileCard />
                                </div>
                            </div>
                        </Drawer.Content>
                    </Drawer.Portal>
                </Drawer.Root>
                <div className='md:block hidden'>
                    <ProfileCard />
                </div>
            </div>
            <RWebShare
                data={{
                    text: text, title: title, url: url,
                }}>
                <div className='flex justify-start items-start md:block hidden mt-auto '>
                    <button className='bg-gray-100 shadow-xl shadow-black rounded-md px-5 py-5 mt-auto ms-5 card-body flex'><IoMdShare /></button>
                </div>
            </RWebShare>
            {/* <div className='bg-blue-800 text-white text-md h-6 mt-5 rounded-md px-7 font-bold py-5 md:hidden block '>JobList</div> */}
        </>
    );
};

export default TurnTo;  
