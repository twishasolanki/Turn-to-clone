'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FaBookmark, FaDirections, FaRegBookmark, FaRegClock } from "react-icons/fa";
import { GrDirections } from "react-icons/gr";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
import { MdBlockFlipped, MdOutlineShare } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { TbCurrencyDollar } from "react-icons/tb";
import { RWebShare } from 'react-web-share';


interface MapProps {
    onBackClick: () => void;
    onBackDrawerClick: () => void;
    title: string;
    text: string;
    url: string;
    onOpenDrawer: () => void;
    jobId: string;
    isBookmarked: boolean;
    toggleBookmark: (id: string) => void;
}

const Map: React.FC<MapProps> = ({ onBackClick, onBackDrawerClick, onOpenDrawer, title, text, url }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const handleBookmarkClick = () => {
        setIsBookmarked(!isBookmarked);
    };
    // const [isBookmarkedState, setIsBookmarkedState] = useState<boolean>(isBookmarked);


    // useEffect(() => {
    //     setIsBookmarkedState(isBookmarked);
    // }, [isBookmarked]);

    // const handleBookmarkClick = () => {
    //     toggleBookmark(jobId);
    // };

    return (
        <>
            <div className="hidden z-10 md:block relative max-w-2xl ms-5 p-2 mt-1 bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex ">
                    <div className="w-1/2">
                        <p className='text-xl font-bold'>Marketing Consultant</p>
                    </div>
                    <div className="w-1/2 flex justify-end items-end">
                        <button onClick={onBackClick} className='bg-blue-500 rounded-md px-1 py-1 text-white'><RiArrowRightSLine /></button>
                    </div>
                </div>
                <p className='text-lg text-blue-500 font-medium mt-1'>Tailwind CSS Solution</p>
                <div className="flex mt-1 text-sm">
                    <div className="flex">
                        <IoLocationOutline className='mt-1' /><p className='flex text-sm'>Rajkot, Gujrat, India</p>
                    </div>
                    <div className="flex ms-2">
                        <FaRegClock className='mt-0.5' /><p className='flex ms-1 text-sm'>Part-time</p>
                    </div>
                    <div className="flex ms-2">
                        <TbCurrencyDollar className='mt-0.5' /><p className='text-sm'>1000-20000</p>
                    </div>
                    <div className="flex">
                        <p className='ms-3'>1</p><GrDirections className='ms-1 text-sm' /><p>~2 -3 mi</p>
                    </div>
                    <div className='flex justify-end items-end mx-auto'>
                        <div className="flex ms-20">
                            <RWebShare
                                data={{
                                    text: text, title: title, url: url,
                                }}>
                                <button className='bg-gray-50 rounded-md shadow-lg px-2 py-2'>
                                    <MdOutlineShare />
                                </button>
                            </RWebShare>
                        </div>
                        <div className="flex ms-5">
                            <button onClick={handleBookmarkClick} className='bg-gray-50 rounded-md shadow-lg shadow-gray-300 px-2 py-2'>
                                {isBookmarked ? <FaBookmark className='text-black' /> : <FaRegBookmark />}
                            </button>
                        </div>
                        <div className="flex ms-5">
                            <button className='bg-gray-50 rounded-md shadow-lg shadow-gray-300 px-2 py-2'><MdBlockFlipped /></button>
                        </div>
                    </div>
                </div>
                <div className='flex text-xs'>
                    <IoCalendarClearOutline /><p className='ms-1'>20 d ago</p>
                </div>
                <hr className='mt-3' />
                <p className='font-bold text-xl p-1'>Over View</p>
                <div className='overflow-y-scroll h-[360px] scroll'>
                    <div className='flex text-sm'>
                        <div className='card-body card bg-white p-3 shadow-xl shadow-gray-300 w-40 rounded-lg'>
                            <p className='font-bold'>Total Applicants</p>
                            <p>0</p>
                        </div>
                        <div className='card-body ms-5 card bg-white p-3 shadow-xl shadow-gray-300 w-36 rounded-lg'>
                            <p className='font-bold'>Total Approved</p>
                            <p>0</p>
                        </div>
                        <div className='card-body ms-5 card bg-white p-3 shadow-xl shadow-gray-300 w-36 rounded-lg'>
                            <p className='font-bold'>Total Rejected</p>
                            <p>0</p>
                        </div>
                        <div className='card-body ms-5 card bg-white p-3 shadow-xl shadow-gray-300 w-28 rounded-lg'>
                            <p className='font-bold'>Url Clicks</p>
                            <p>0</p>
                        </div>
                    </div>
                    <div className='flex mt-2 text-sm'>
                        <div className='card-body card bg-white p-3 shadow-xl shadow-gray-300 w-32 rounded-lg'>
                            <p className='font-bold'>Impressions</p>
                            <p>0</p>
                        </div>
                        <div className='card-body ms-5 card bg-white p-3 shadow-xl shadow-gray-300 w-34 rounded-lg'>
                            <p className='font-bold'>Job Status</p>
                            <p>
                                <select name="job-status" id="job-status">
                                    <option value="Published">Published</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </p>
                        </div>
                        <div className='card-body ms-5 card bg-white p-3 shadow-xl shadow-gray-300 w-36 rounded-lg text-sm'>
                            <p className='font-bold'>Position Status</p>
                            <p>
                                <select name="position-status" id="position-status">
                                    <option value="Vacant">Vacant</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </p>
                        </div>
                        <div className='card-body ms-5 card bg-white p-3 shadow-xl shadow-gray-300 w-28 rounded-lg'>
                            <p className='font-bold'>Campaign</p>
                            <p>0</p>
                        </div>
                    </div>
                    <div className='flex mt-2 text-sm'>
                        <div className='card-body card bg-white p-3 shadow-xl shadow-gray-300 w-44 rounded-lg'>
                            <p className='font-bold'>Job Id</p>
                            <p>1717074083267</p>
                        </div>
                        <div className='card-body ms-5 card bg-white p-3 shadow-xl shadow-gray-300 w-64 rounded-lg'>
                            <p className='font-bold'>Category</p>
                            <p>Business continuity specialist</p>
                        </div>
                    </div>
                    <div className='mt-2 text-md'>
                        <p className='font-bold'>Job Description</p>
                        <p className='text-gray-400'>utyutyy</p>
                    </div>
                    <div className='mt-2 text-md'>
                        <p className='font-bold'>Job Type</p>
                        <p className='text-gray-400 bg-gray-200 w-24 p-1 rounded-md mt-1'><span className='text-purple-800'>PART-TIME</span></p>
                    </div>
                    <div className='mt-3 text-md'>
                        <p className='font-bold'>Job Shift</p>
                        <p className='text-gray-400 bg-gray-200 w-24 p-1 rounded-md mt-1'><span className='text-purple-800'>DAY-SHIFT</span></p>
                    </div>
                </div>
                <hr className='mt-5' />
                <div className="flex mt-5">
                    <div className="w-1/3">
                        <button className='bg-blue-500 rounded-md px-3 py-2 text-white font-bold'>Apply</button>
                    </div>
                    <div className="w-1/3 flex justify-center items-center">
                        <FaDirections />
                    </div>
                    <div className="w-1/3 flex justify-end items-end">
                        <button className='bg-red-500 rounded-md px-3 py-2 text-white font-bold'>Report</button>
                    </div>
                </div>
                <div className='flex justify-center items-center -mt-2'><p className='flex'><FaRegClock className='mt-1' />~3 min</p></div>
                <div className='flex justify-end items-end -mt-3'>
                    <p className='text-red-600'>Something Wrong?</p>
                </div>
            </div>


            <div ref={mapRef} onClick={() => {
                onBackDrawerClick();
            }} >
                <div className='flex overflow-x-hidden md:hidd  en block'>
                    <div className='fixed right-0 z-40'>
                        <div className='flex'>
                            <div className="block md:hidden h-screen max-w-md p-2 bg-white border border-gray-200 rounded-lg shadow relative">
                                <div className="h-10 absolute top-96 left-[-17px] z-50">
                                    <button onClick={onBackClick} className='bg-blue-700 rounded-md px-2 py-2 text-white'>
                                        <RiArrowRightSLine />
                                    </button>
                                </div>
                                <div className="flex">
                                    <div className="w-1/2">
                                        <p className='text-lg font-bold'>Marketing Consultant</p>
                                    </div>
                                </div>
                                <p className='text-md text-blue-500 font-medium'>Tailwind CSS Solution</p>
                                <div className="flex text-md">
                                    <div className="flex items-center">
                                        <IoLocationOutline className='mt-1' />
                                        <p className='flex text-sm ml-1'>Rajkot, Gujarat, India</p>
                                    </div>
                                    <div className="flex items-center ml-2">
                                        <FaRegClock className='mt-1' />
                                        <p className='flex ms-1'>Part-time</p>
                                    </div>
                                </div>
                                <div className='flex text-md'>
                                    <div className="flex items-center mt-1">
                                        <TbCurrencyDollar />
                                        <p>1000-20000</p>
                                    </div>
                                    <div className="flex items-center ml-3">
                                        <p>1</p>
                                        <GrDirections className='ml-1' />
                                        <p>~2 - 3 mi</p>
                                    </div>
                                </div>
                                <div className='flex items-center text-md '>
                                    <IoCalendarClearOutline className='mt-1' />
                                    <p className='ml-1 mt-1'>20 d ago</p>
                                </div>
                                <div className="justify-end items-center ml-auto space-x-5 mb-2 mt-2">
                                    <RWebShare
                                        data={{
                                            text: text,
                                            title: title,
                                            url: url,
                                        }}>
                                        <button className='bg-gray-50 rounded-md shadow-lg px-2 py-2'>
                                            <MdOutlineShare />
                                        </button>
                                    </RWebShare>
                                    <button onClick={handleBookmarkClick} className='bg-gray-50 rounded-md shadow-lg shadow-gray-300 px-2 py-2'>
                                        {isBookmarked ? <FaBookmark className='text-black' /> : <FaRegBookmark />}
                                    </button>
                                    <button className='bg-gray-50 rounded-md shadow-lg px-2 py-2'>
                                        <MdBlockFlipped />
                                    </button>
                                </div>
                                <hr className='mt-3' />
                                <p className='font-bold text-lg p-1 mt-2'>Overview</p>
                                <div className='overflow-y-scroll h-[48%]'>
                                    <div className='flex-wrap text-sm'>
                                        <div className='card-body card bg-white p-2 shadow-xl shadow-gray-300 w-40 rounded-lg'>
                                            <p className='font-bold'>Total Applicants</p>
                                            <p>0</p>
                                        </div>
                                        <div className='card-body mt-2 card bg-white p-2 shadow-xl shadow-gray-300 w-36 rounded-lg'>
                                            <p className='font-bold'>Total Approved</p>
                                            <p>0</p>
                                        </div>
                                        <div className='card-body mt-2 card bg-white p-2 shadow-xl shadow-gray-300 w-36 rounded-lg'>
                                            <p className='font-bold'>Total Rejected</p>
                                            <p>0</p>
                                        </div>
                                        <div className='flex mt-2'>
                                            <div className='card-body card bg-white p-2 shadow-xl shadow-gray-300 w-28 rounded-lg'>
                                                <p className='font-bold'>Url Clicks</p>
                                                <p>0</p>
                                            </div>
                                            <div className='card-body ms-5 card bg-white p-2 shadow-xl shadow-gray-300 w-32 rounded-lg'>
                                                <p className='font-bold'>Impressions</p>
                                                <p>0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col flex-wrap mt-2 text-xs'>
                                        <div className='card-body card bg-white p-2 shadow-xl shadow-gray-300 w-28 rounded-lg max-w-sm'>
                                            <p className='font-bold'>Job Status</p>
                                            <select name="job-status" id="job-status" className='mt-1'>
                                                <option value="Published">Published</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                        <div className='card-body card mt-2 bg-white p-2 shadow-xl shadow-gray-300 w-36 rounded-lg'>
                                            <p className='font-bold'>Position Status</p>
                                            <select name="position-status" id="position-status" className='mt-1'>
                                                <option value="Vacant">Vacant</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                        <div className='card-body mt-2 card bg-white p-2 shadow-xl shadow-gray-300 w-28 rounded-lg'>
                                            <p className='font-bold'>Campaign</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-2 text-xs'>
                                        <div className='card-body card bg-white p-2 shadow-xl shadow-gray-300 w-44 rounded-lg'>
                                            <p className='font-bold'>Job Id</p>
                                            <p>1717074083267</p>
                                        </div>
                                        <div className='card-body mt-2 card bg-white p-2 shadow-xl shadow-gray-300 w-52 rounded-lg'>
                                            <p className='font-bold'>Category</p>
                                            <p>Business continuity specialist</p>
                                        </div>
                                    </div>
                                    <div className='mt-3 text-xs'>
                                        <p className='font-bold'>Job Description</p>
                                        <p className='text-gray-400'>utyutyy</p>
                                    </div>
                                    <div className='mt-3 text-xs'>
                                        <p className='font-bold'>Job Type</p>
                                        <p className='text-gray-400 bg-gray-200 w-24 text-xs p-1 rounded-md mt-1'>
                                            <span className='text-purple-800'>PART-TIME</span>
                                        </p>
                                    </div>
                                    <div className='mt-3 text-xs'>
                                        <p className='font-bold'>Job Shift</p>
                                        <p className='text-gray-400 bg-gray-200 w-24 text-xs p-1 rounded-md mt-1'>
                                            <span className='text-purple-800'>DAY-SHIFT</span>
                                        </p>
                                    </div>
                                </div>
                                <hr className='mt-2' />
                                <div className='mb-14'>
                                    <div className="flex mt-3 text-xs">
                                        <div className="w-1/3">
                                            <button className='bg-blue-500 rounded-md px-4 py-3 text-white font-bold'>Apply</button>
                                        </div>
                                        <div className="w-1/3 flex justify-center items-center">
                                            <FaDirections />
                                        </div>
                                        <div className="w-1/3 flex justify-end items-end">
                                            <button className='bg-red-500 rounded-md px-4 py-3 text-white font-bold'>Report</button>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center text-xs'>
                                        <p className='flex text-xs -mt-3'>
                                            <FaRegClock />~3 min
                                        </p>
                                    </div>
                                    <div className='flex justify-end items-end'>
                                        <p className='text-red-600 text-xs ms-5'>Something Wrong?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Map;





// // Map.tsx
// 'use client'
// import React, { useState, useEffect } from 'react';
// import { FaBookmark, FaRegBookmark } from "react-icons/fa";
// import { RiArrowRightSLine } from "react-icons/ri";
// import { RWebShare } from 'react-web-share';

// interface MapProps {
//     onBackClick: () => void;
//     title: string;
//     text: string;
//     url: string;
//     jobId: string;
//     isBookmarked: boolean;
//     toggleBookmark: (id: string) => void;
// }

// const Map: React.FC<MapProps> = ({ onBackClick, title, text, url, jobId, isBookmarked, toggleBookmark }) => {
//     const [isBookmarkedState, setIsBookmarkedState] = useState<boolean>(isBookmarked);

//     useEffect(() => {
//         setIsBookmarkedState(isBookmarked);
//     }, [isBookmarked]);

//     const handleBookmarkClick = () => {
//         toggleBookmark(jobId);
//     };

//     return (
//         <div className="fixed z-10 inset-0 bg-white border border-gray-200 rounded-lg shadow p-4">
//             <div className="flex justify-between">
//                 <h2 className="text-xl font-bold">{title}</h2>
//                 <button onClick={onBackClick} className='bg-blue-500 rounded-md px-2 py-1 text-white'>
//                     <RiArrowRightSLine />
//                 </button>
//             </div>
//             <p className='text-lg text-blue-500 font-medium mt-2'>{text}</p>
//             <div className="flex mt-2 text-sm">
//                 <div className="flex">
//                     <p className='flex text-sm'>Rajkot, Gujrat, India</p>
//                 </div>
//                 <div className='flex justify-end items-center mx-auto'>
//                     <RWebShare data={{ text, title, url }}>
//                         <button className='bg-gray-50 rounded-md shadow-lg px-2 py-2'>
//                             Share
//                         </button>
//                     </RWebShare>
//                     <button onClick={handleBookmarkClick} className='bg-gray-50 rounded-md shadow-lg px-2 py-2 ml-2'>
//                         {isBookmarkedState ? <FaBookmark className='text-black' /> : <FaRegBookmark />}
//                     </button>
//                 </div>
//             </div>
//             <hr className='mt-4' />
//             <div className='overflow-y-scroll h-[200px] mt-4'>
//                 {/* Overview content */}
//             </div>
//         </div>
//     );
// };

// export default Map;





// 'use client';
// import React, { useRef, useState } from 'react';
// import { FaBookmark, FaDirections, FaRegBookmark, FaRegClock } from "react-icons/fa";
// import { GrDirections } from "react-icons/gr";
// import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
// import { MdBlockFlipped, MdOutlineShare } from "react-icons/md";
// import { RiArrowRightSLine } from "react-icons/ri";
// import { TbCurrencyDollar } from "react-icons/tb";
// import { RWebShare } from 'react-web-share';


// interface MapProps {
//     onBackClick: () => void;
//     onBackDrawerClick: () => void;
//     title: string;
//     text: string;
//     url: string;
//     onOpenDrawer: () => void;
// }

// const Map: React.FC<MapProps> = ({ onBackClick, onBackDrawerClick, onOpenDrawer, title, text, url }) => {
//     const mapRef = useRef<HTMLDivElement>(null);
//     const [isBookmarked, setIsBookmarked] = useState(false);

//     const handleBookmarkClick = () => {
//         setIsBookmarked(!isBookmarked);
//     };

//     return (
//         <div ref={mapRef} onClick={onBackDrawerClick} >
//             <div className='flex overflow-x-hidden md:hidden block'>
//                 <div className='fixed right-0 z-40'>
//                     <div className='flex'>
//                         <div className="block md:hidden h-screen max-w-md p-2 bg-white border border-gray-200 rounded-lg shadow relative">
//                             <div className="h-10 absolute top-96 left-[-17px] z-50">
//                                 <button onClick={onBackClick} className='bg-blue-700 rounded-md px-2 py-2 text-white'>
//                                     <RiArrowRightSLine />
//                                 </button>
//                             </div>
//                             <div className="flex">
//                                 <div className="w-1/2">
//                                     <p className='text-lg font-bold'>Marketing Consultant</p>
//                                 </div>
//                             </div>
//                             <p className='text-md text-blue-500 font-medium'>Tailwind CSS Solution</p>
//                             <div className="flex text-md">
//                                 <div className="flex items-center">
//                                     <IoLocationOutline className='mt-1' />
//                                     <p className='flex text-sm ml-1'>Rajkot, Gujarat, India</p>
//                                 </div>
//                                 <div className="flex items-center ml-2">
//                                     <FaRegClock className='mt-1' />
//                                     <p className='flex ms-1'>Part-time</p>
//                                 </div>
//                             </div>
//                             <div className='flex text-md'>
//                                 <div className="flex items-center mt-1">
//                                     <TbCurrencyDollar />
//                                     <p>1000-20000</p>
//                                 </div>
//                                 <div className="flex items-center ml-3">
//                                     <p>1</p>
//                                     <GrDirections className='ml-1' />
//                                     <p>~2 - 3 mi</p>
//                                 </div>
//                             </div>
//                             <div className='flex items-center text-md '>
//                                 <IoCalendarClearOutline className='mt-1' />
//                                 <p className='ml-1 mt-1'>20 d ago</p>
//                             </div>
//                             <div className="justify-end items-center ml-auto space-x-5 mb-2 mt-2">
//                                 <RWebShare
//                                     data={{
//                                         text: text,
//                                         title: title,
//                                         url: url,
//                                     }}>
//                                     <button className='bg-gray-50 rounded-md shadow-lg px-2 py-2'>
//                                         <MdOutlineShare />
//                                     </button>
//                                 </RWebShare>
//                                 <button onClick={handleBookmarkClick} className='bg-gray-50 rounded-md shadow-lg shadow-gray-300 px-2 py-2'>
//                                     {isBookmarked ? <FaBookmark className='text-black' /> : <FaRegBookmark />}
//                                 </button>
//                                 <button className='bg-gray-50 rounded-md shadow-lg px-2 py-2'>
//                                     <MdBlockFlipped />
//                                 </button>
//                             </div>
//                             <hr className='mt-3' />
//                             <p className='font-bold text-lg p-1 mt-2'>Overview</p>
//                             <div className='overflow-y-scroll h-[48%]'>
//                                 <div className='flex-wrap text-sm'>
//                                     <div className='card-body card bg-white p-2 shadow-xl shadow-gray-300 w-40 rounded-lg'>
//                                         <p className='font-bold'>Total Applicants</p>
//                                         <p>0</p>
//                                     </div>
//                                     <div className='card-body mt-2 card bg-white p-2 shadow-xl shadow-gray-300 w-36 rounded-lg'>
//                                         <p className='font-bold'>Total Approved</p>
//                                         <p>0</p>
//                                     </div>
//                                     <div className='card-body mt-2 card bg-white p-2 shadow-xl shadow-gray-300 w-36 rounded-lg'>
//                                         <p className='font-bold'>Total Rejected</p>
//                                         <p>0</p>
//                                     </div>
//                                     <div className='flex mt-2'>
//                                         <div className='card-body card bg-white p-2 shadow-xl shadow-gray-300 w-28 rounded-lg'>
//                                             <p className='font-bold'>Url Clicks</p>
//                                             <p>0</p>
//                                         </div>
//                                         <div className='card-body ms-5 card bg-white p-2 shadow-xl shadow-gray-300 w-32 rounded-lg'>
//                                             <p className='font-bold'>Impressions</p>
//                                             <p>0</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='flex flex-col flex-wrap mt-2 text-xs'>
//                                     <div className='card-body card bg-white p-2 shadow-xl shadow-gray-300 w-28 rounded-lg max-w-sm'>
//                                         <p className='font-bold'>Job Status</p>
//                                         <select name="job-status" id="job-status" className='mt-1'>
//                                             <option value="Published">Published</option>
//                                             <option value="saab">Saab</option>
//                                             <option value="opel">Opel</option>
//                                             <option value="audi">Audi</option>
//                                         </select>
//                                     </div>
//                                     <div className='card-body card mt-2 bg-white p-2 shadow-xl shadow-gray-300 w-36 rounded-lg'>
//                                         <p className='font-bold'>Position Status</p>
//                                         <select name="position-status" id="position-status" className='mt-1'>
//                                             <option value="Vacant">Vacant</option>
//                                             <option value="saab">Saab</option>
//                                             <option value="opel">Opel</option>
//                                             <option value="audi">Audi</option>
//                                         </select>
//                                     </div>
//                                     <div className='card-body mt-2 card bg-white p-2 shadow-xl shadow-gray-300 w-28 rounded-lg'>
//                                         <p className='font-bold'>Campaign</p>
//                                         <p>0</p>
//                                     </div>
//                                 </div>
//                                 <div className='flex flex-col mt-2 text-xs'>
//                                     <div className='card-body card bg-white p-2 shadow-xl shadow-gray-300 w-44 rounded-lg'>
//                                         <p className='font-bold'>Job Id</p>
//                                         <p>1717074083267</p>
//                                     </div>
//                                     <div className='card-body mt-2 card bg-white p-2 shadow-xl shadow-gray-300 w-52 rounded-lg'>
//                                         <p className='font-bold'>Category</p>
//                                         <p>Business continuity specialist</p>
//                                     </div>
//                                 </div>
//                                 <div className='mt-3 text-xs'>
//                                     <p className='font-bold'>Job Description</p>
//                                     <p className='text-gray-400'>utyutyy</p>
//                                 </div>
//                                 <div className='mt-3 text-xs'>
//                                     <p className='font-bold'>Job Type</p>
//                                     <p className='text-gray-400 bg-gray-200 w-24 text-xs p-1 rounded-md mt-1'>
//                                         <span className='text-purple-800'>PART-TIME</span>
//                                     </p>
//                                 </div>
//                                 <div className='mt-3 text-xs'>
//                                     <p className='font-bold'>Job Shift</p>
//                                     <p className='text-gray-400 bg-gray-200 w-24 text-xs p-1 rounded-md mt-1'>
//                                         <span className='text-purple-800'>DAY-SHIFT</span>
//                                     </p>
//                                 </div>
//                             </div>
//                             <hr className='mt-2' />
//                             <div className='mb-14'>
//                                 <div className="flex mt-3 text-xs">
//                                     <div className="w-1/3">
//                                         <button className='bg-blue-500 rounded-md px-4 py-3 text-white font-bold'>Apply</button>
//                                     </div>
//                                     <div className="w-1/3 flex justify-center items-center">
//                                         <FaDirections />
//                                     </div>
//                                     <div className="w-1/3 flex justify-end items-end">
//                                         <button className='bg-red-500 rounded-md px-4 py-3 text-white font-bold'>Report</button>
//                                     </div>
//                                 </div>
//                                 <div className='flex justify-center items-center text-xs'>
//                                     <p className='flex text-xs -mt-3'>
//                                         <FaRegClock />~3 min
//                                     </p>
//                                 </div>
//                                 <div className='flex justify-end items-end'>
//                                     <p className='text-red-600 text-xs ms-5'>Something Wrong?</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Map;
