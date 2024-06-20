'use client'
import React, { useState, useEffect } from 'react'
import { CiShare2 } from "react-icons/ci";
import { ImNewTab } from "react-icons/im";
import { MdBlockFlipped } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";


const turnto: React.FC = () => {

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
        
    ]

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('#toggleButton') && !event.target.closest('#popupMenu')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div>
                <div className="p-4 md:flex md:flex-row flex-col md:w-full">
                    <form className="flex items-center md:max-w-lg">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                                </svg>
                            </div>
                            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Search Mockups, Logos, Design Templates..." required />
                        </div>
                    </form>
                    <form className="flex items-center md:max-w-lg md:mt-0 mt-1">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                                </svg>
                            </div>
                            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Search Mockups, Logos, Design Templates..." required />
                        </div>
                        <button type="submit" className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </form>
                </div>
                <div className='flex mx-auto justify-start items-start ms-5'>
                    <button type="button" className="text-white bg-blue-700 font-medium rounded-lg md:text-md text-sm px-4 py-2 mb-2 focus:outline-none ">last 15 days</button>
                    <button type="button" className="text-white ms-3 bg-blue-700 font-medium rounded-lg md:text-md text-sm  px-4 py-2 mb-2 focus:outline-none ">within 20 miles</button>
                    <button type="button" className="text-black ms-3 bg-gray-100 font-medium rounded-lg md:text-md text-sm  px-4 py-2 mb-2 focus:outline-none ">Job Type</button>
                </div>
                <div className='ms-5'>
                    <button type="button" className="text-black bg-gray-100 rounded-lg md:text-md text-sm  px-4 py-2 mb-2 font-bold ">Latest Job</button>
                </div>
                <div className="mt-5 pl-4 pr-4 md:h-[calc(77vh-20px)] h-[calc(65vh-20px)]  overflow-y-scroll ">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block max-w-lg p-2 mt-3 bg-white border border-blue-200 rounded-lg shadow"
                        >
                            <div className="flex md:flex-row flex-col">
                                <div className="md:w-1/2">
                                    <p className="font-bold md:text-xl text-md">{item.title}</p>
                                </div>
                                <div className="md:w-1/2 flex justify-end relative">
                                    <svg
                                        id="toggleButton"
                                        onClick={togglePopup}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="32"
                                        fill="currentColor"
                                        className="bi bi-three-dots-vertical cursor-pointer"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="md:w-1/2">
                                    <p className="text-blue-400 md:text-lg text-sm">{item.subtitle}</p>
                                </div>
                                <div className="md:w-1/2 flex justify-end items-end">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-bookmark ms-5"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex mt-1">
                                <div className="md:w-1/4 flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-geo-alt"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    <p className="ms-1 text-sm">{item.location}</p>
                                </div>
                                <div className="md:w-1/4 flex ms-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-clock"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                    </svg>
                                    <p className="ms-1 text-sm">{item.time}</p>
                                </div>
                                <div className="md:w-1/4 flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-currency-dollar"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                                    </svg>
                                    <p className="text-sm">{item.price}</p>
                                </div>
                                <div className="md:w-1/4 flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-calendar"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9 2H3v1a.5.5 0 0 1-1 0V2H2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1h-1v1a.5.5 0 0 1-1 0V2zm2 4H1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6z" />
                                    </svg>
                                    <p className="ms-1 text-sm">{item.day}</p>
                                </div>
                            </div>
                            <div className="flex mt-2">
                                <div className="md:w-28  flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-arrow-left-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M13.854 5.854a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 5H1.5a.5.5 0 0 0 0 1h10.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3zm-11.708 4a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 9H14.5a.5.5 0 0 1 0 1H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                                        />
                                    </svg>
                                    <p className="ms-1 text-sm">{item.direction}</p>
                                </div>
                                <div className="md:w-1/2 ms-5 flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-clock"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                    </svg>
                                    <p className="ms-1 text-sm">{item.min}</p>
                                </div>
                            </div>
                            <div className="md:text-lg text-xs font-bold mt-2 underline ">{item.content}</div>
                            <div className="text-blue-400 md:text-lg text-xs font-medium ">{item.login}</div>
                        </a>
                    ))}
                    {isOpen && (
                        <div
                            id="popup"
                            className="absolute top-5 right-0 w-64 h-40 bg-white border rounded-lg shadow-lg p-2"
                        >
                           <ul>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex"><CiShare2 className='mt-1' /><span className='ms-2'>Share This Job</span></li>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex"><ImNewTab className='mt-1' /><span className='ms-2'>Open In New Tab</span></li>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex"><MdBlockFlipped className='mt-1' /><span className='ms-2'>Not Intrested</span></li>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex"><CiFlag1 className='mt-1' /><span className='ms-2'>Problem With This Job?</span></li>
                            </ul>
                        </div>
                    )}
                </div>

        
                {/* <div className='flex justify-end items-end position-fixed position-static md:hidden '>
                    <button className='bg-blue-700 text-white px-5 py-2  font-bold text-xl rounded-lg'>Job List</button>
                </div> */}
            </div>
        </>
    )
}
export default turnto;
