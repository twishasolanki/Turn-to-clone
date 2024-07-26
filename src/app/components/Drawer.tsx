'use client';
import Map from '@/app/components/Map';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLine } from "react-icons/ai";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiCalendar, CiFlag1 } from 'react-icons/ci';
import { FaBookmark, FaDirections, FaRegBookmark, FaRegClock } from 'react-icons/fa';
import { GrDirections } from 'react-icons/gr';
import { ImNewTab } from 'react-icons/im';
import { IoMdShare } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { LuDollarSign } from 'react-icons/lu';
import { MdBlockFlipped } from 'react-icons/md';
import { Sheet, SheetRef } from 'react-modal-sheet';
import { RWebShare } from "react-web-share";
import SimpleMap from '@/app/components/Googlemap/SimpleMap';

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
}

const Drawercard: React.FC<ShareButtonProps> = ({ title, text, url }) => {
    const [activePopupId, setActivePopupId] = useState<number | null>(null);
    const [isOpen, setOpen] = useState<boolean>(false);
    const [selectedItemcard, setSelectedItemcard] = useState<number | null>(null);
    const [bookmarkedItems, setBookmarkedItems] = useState<{ [key: number]: boolean }>({});
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const ref = useRef<SheetRef>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const items = [
        {
            id: 1,
            title: 'Marketing Consultant',
            subtitle: 'Tailwind',
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
            subtitle: 'Tailwind',
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
            subtitle: 'Tailwind',
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
            subtitle: 'Tailwind',
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
            subtitle: 'Tailwind',
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
            subtitle: 'Tailwind',
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
            id: 7,
            title: 'Marketing Consultant',
            subtitle: 'Tailwind',
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
            id: 8,
            title: 'Marketing Consultant',
            subtitle: 'Tailwind',
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
            id: 9,
            title: 'Marketing Consultant',
            subtitle: 'Tailwind',
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
            id: 10,
            title: 'Marketing Consultant',
            subtitle: 'Tailwind',
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
            setActivePopupId(null);
        } else {
            setActivePopupId(id);
        }
    };

    const toggleBookmark = (id: number) => {
        setBookmarkedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleContextMenu = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        togglePopup(id);
    };

    const handleItemClick = (id: number) => {
        setScrollPosition(scrollContainerRef.current?.scrollTop || 0);
        setSelectedItemcard(id);
        setOpen(false);
    };

    const handleClosePopup = () => {
        setActivePopupId(null);
    };

    const handleOpenPopup = () => {
        setOpen(true);

    };

    useEffect(() => {
        const handleScroll = () => {
            if (activePopupId !== null || isOpen) {
                setActivePopupId(null);
                setOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activePopupId, isOpen]);

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollPosition;
        }
    }, [scrollPosition, isOpen]);

    const handlclickJoblist = () => {
        setScrollPosition(0);
    };

    const ColseDrawer = () =>{ 
        console.log("12");
        
        setOpen(false)
    }
  
    if (selectedItemcard !== null) {
        return <Map onBackClick={() => setSelectedItemcard(null)} onClick={() => setOpen(false)} onBackDrawerClick={() => setOpen(true)} />
    }
    if (selectedItemcard !== null) {
        return <SimpleMap ColseDrawer={ColseDrawer}  />
    }
    return (
        <>
            <div className='me-8'>
                <button onClick={() => {
                    handleOpenPopup()
                    handlclickJoblist()
                }
                } className='md:hidden block bottom-6 right-2 h-8 w-20 rounded-lg px-2 py-1 font-bold bg-[#5932EA] text-center text-white fixed'>Job List</button>
            </div>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)}
                snapPoints={[600, 400, 200, 0]}
                initialSnap={1}
                ref={ref}
                className='md:hidden block'
            >
                <Sheet.Container>
                    <Sheet.Header className='shadow-xl shadow-gray-300 p-2'>
                        <div className="flex justify-start items-start">
                            <div className="w-1/3 font-bold">
                                <p>Latest job</p>
                            </div>
                            <div className="w-1/3 font-bold flex justify-center items-center">
                                <AiOutlineLine className='mt-1' />
                            </div>
                            <div className="w-1/3 font-bold justify-end items-end flex">
                                <p>2/2 Jobs</p>
                            </div>
                        </div>
                    </Sheet.Header>
                    <Sheet.Content>
                        <div className='md:hidden block'>
                            <div className='flex w-screen p-1 justify-center items-center md:hidden block' onClick={handleClosePopup}>
                                <div className='text-sm'>
                                    <div ref={scrollContainerRef} className="h-[calc(185dvh-95dvh)] md:overflow-y-scroll overflow-scroll md:hidden block" onScroll={() => setActivePopupId(null)}>
                                        {items.map((item) => (
                                            <div key={item.id} onContextMenu={(e) => handleContextMenu(e, item.id)} className="block flex p-2 w-screen mt-3 overflow-scroll bg-white border border-blue-200 rounded-lg shadow">
                                                <div className="flex w-3/2">
                                                    <div onClick={() => handleItemClick(item.id)}>
                                                        <div className="flex md:flex-row flex-col">
                                                            <div className="md:w-1/2">
                                                                <p className="font-bold md:text-md text-md ">{item.title}</p>
                                                            </div>
                                                            <div className="md:w-1/2 flex justify-end items-end relative">
                                                                <button onClick={() => togglePopup(item.id)} className="text-gray-500 focus:outline-none md:block hidden">
                                                                    <BsThreeDotsVertical />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="flex">
                                                            <div className="md:w-1/2 md:text-md text-xs">
                                                                <p className="text-blue-400">{item.subtitle}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex mt-1">
                                                            <div className="md:w-1/4 flex">
                                                                <IoLocationOutline />
                                                                <p className="ms-1 text-xs">{item.location}</p>
                                                            </div>
                                                            <div className="md:w-1/4 flex ms-2">
                                                                <FaRegClock />
                                                                <p className="ms-1 text-xs">{item.time}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex mt-1">
                                                            <div className="md:w-1/4 w-24 flex md:ms-0">
                                                                <LuDollarSign />
                                                                <p className="text-xs flex">{item.price}</p>
                                                            </div>
                                                            <div className="md:w-1/4 w-20 flex">
                                                                <CiCalendar />
                                                                <p className="ms-1 text-xs">{item.day}</p>
                                                            </div>
                                                            <div className="md:w-28 w-20 flex">
                                                                <GrDirections />
                                                                <p className="ms-1 text-xs">{item.direction}</p>
                                                            </div>
                                                        </div>
                                                        <div className="md:w-1/2 mt-1 flex">
                                                            <FaRegClock />
                                                            <p className="ms-1 text-xs">{item.min}</p>
                                                        </div>
                                                        <div className="md:text-md text-xs font-bold mt-1 underline">{item.content}</div>
                                                        <div className="text-blue-400 md:text-md mt-1 text-xs font-medium">{item.login}</div>
                                                    </div>
                                                </div>
                                                <div className="w-1/2">
                                                    <div className="md:w-1/2 w-full flex justify-end items-end">
                                                        {bookmarkedItems[item.id] ? (
                                                            <FaBookmark
                                                                style={{ color: 'black', cursor: 'pointer' }}
                                                                onClick={() => toggleBookmark(item.id)}
                                                            />
                                                        ) : (
                                                            <FaRegBookmark
                                                                style={{ color: 'gray', cursor: 'pointer' }}
                                                                onClick={() => toggleBookmark(item.id)}
                                                            />
                                                        )}
                                                    </div>
                                                    <div className='flex justify-end items-end mx-auto ms-8 mt-6'>
                                                        <FaDirections />
                                                    </div>
                                                </div>
                                                {activePopupId === item.id && (
                                                    <div className='flex justify-end items-end'>
                                                        <div id="popupMenu" className="absolute mt-2 w-58 py-2 bg-white border border-gray-200 rounded-lg shadow-xl z-10 text-sm">
                                                            <RWebShare data={{ text: text, title: title, url: url }}>
                                                                <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100">
                                                                    <button className='flex'>
                                                                        <IoMdShare /><span className='ms-2'>Share This Job</span>
                                                                    </button>
                                                                </a>
                                                            </RWebShare>
                                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><ImNewTab className='mt-1' /><span className='ms-2'>Open In New Tab</span></a>
                                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><MdBlockFlipped className='mt-1' /><span className='ms-2'>Not Interested</span></a>
                                                            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><CiFlag1 className='mt-1' /><span className='ms-2'>Problem With This Job?</span></a>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop onClick={() => setOpen(false)} />
            </Sheet>
        </>
    )
}
export default Drawercard;

//drawer first card
// 'use client';
// import Map from '@/app/components/Map';
// import React, { useEffect, useRef, useState } from 'react';
// import { AiOutlineLine } from "react-icons/ai";
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { CiCalendar, CiFlag1 } from 'react-icons/ci';
// import { FaBookmark, FaDirections, FaRegBookmark, FaRegClock } from 'react-icons/fa';
// import { GrDirections } from 'react-icons/gr';
// import { ImNewTab } from 'react-icons/im';
// import { IoMdShare } from 'react-icons/io';
// import { IoLocationOutline } from 'react-icons/io5';
// import { LuDollarSign } from 'react-icons/lu';
// import { MdBlockFlipped } from 'react-icons/md';
// import { Sheet, SheetRef } from 'react-modal-sheet';
// import { RWebShare } from "react-web-share";

// interface ShareButtonProps {
//     title: string;
//     text: string;
//     url: string;
// }

// const Drawercard: React.FC<ShareButtonProps> = ({ title, text, url }) => {
//     const [activePopupId, setActivePopupId] = useState<number | null>(null);
//     const [isOpen, setOpen] = useState<boolean>(false);
//     const [selectedItemcard, setSelectedItemcard] = useState<number | null>(null);
//     const [bookmarkedItems, setBookmarkedItems] = useState<{ [key: number]: boolean }>({});
//     const ref = useRef<SheetRef>(null);
//     const scrollContainerRef = useRef<HTMLDivElement>(null);
//     const items = [
//         {
//             id: 1,
//             title: 'Marketing Consultant',
//             subtitle: 'Tailwind',
//             location: 'Rajkot,360001',
//             time: 'Part-Time',
//             price: '1000-20000',
//             day: '18 d ago',
//             direction: '~3 - 4 Mi',
//             min: '~5min',
//             content: 'Turn-To AI Profile Match',
//             login: 'Login To See Profile Matching'
//         },
//         {
//             id: 2,
//             title: 'Marketing Consultant',
//             subtitle: 'Tailwind',
//             location: 'Rajkot,360001',
//             time: 'Part-Time',
//             price: '1000-20000',
//             day: '18 d ago',
//             direction: '~3 - 4 Mi',
//             min: '~5min',
//             content: 'Turn-To AI Profile Match',
//             login: 'Login To See Profile Matching'
//         },
//         {
//             id: 3,
//             title: 'Marketing Consultant',
//             subtitle: 'Tailwind',
//             location: 'Rajkot,360001',
//             time: 'Part-Time',
//             price: '1000-20000',
//             day: '18 d ago',
//             direction: '~3 - 4 Mi',
//             min: '~5min',
//             content: 'Turn-To AI Profile Match',
//             login: 'Login To See Profile Matching'
//         },
//         {
//             id: 4,
//             title: 'Marketing Consultant',
//             subtitle: 'Tailwind',
//             location: 'Rajkot,360001',
//             time: 'Part-Time',
//             price: '1000-20000',
//             day: '18 d ago',
//             direction: '~3 - 4 Mi',
//             min: '~5min',
//             content: 'Turn-To AI Profile Match',
//             login: 'Login To See Profile Matching'
//         },
//         {
//             id: 5,
//             title: 'Marketing Consultant',
//             subtitle: 'Tailwind',
//             location: 'Rajkot,360001',
//             time: 'Part-Time',
//             price: '1000-20000',
//             day: '18 d ago',
//             direction: '~3 - 4 Mi',
//             min: '~5min',
//             content: 'Turn-To AI Profile Match',
//             login: 'Login To See Profile Matching'
//         },
//         {
//             id: 6,
//             title: 'Marketing Consultant',
//             subtitle: 'Tailwind',
//             location: 'Rajkot,360001',
//             time: 'Part-Time',
//             price: '1000-20000',
//             day: '18 d ago',
//             direction: '~3 - 4 Mi',
//             min: '~5min',
//             content: 'Turn-To AI Profile Match',
//             login: 'Login To See Profile Matching'
//         },
//         {
//             id: 7,
//             title: 'Marketing Consultant',
//             subtitle: 'Tailwind',
//             location: 'Rajkot,360001',
//             time: 'Part-Time',
//             price: '1000-20000',
//             day: '18 d ago',
//             direction: '~3 - 4 Mi',
//             min: '~5min',
//             content: 'Turn-To AI Profile Match',
//             login: 'Login To See Profile Matching'
//         },
//         {
//             id: 8,
//             title: 'Marketing Consultant',
//             subtitle: 'Tailwind',
//             location: 'Rajkot,360001',
//             time: 'Part-Time',
//             price: '1000-20000',
//             day: '18 d ago',
//             direction: '~3 - 4 Mi',
//             min: '~5min',
//             content: 'Turn-To AI Profile Match',
//             login: 'Login To See Profile Matching'
//         },
//         {
//             id: 9,
//             title: 'Marketing Consultant',
//             subtitle: 'Tailwind',
//             location: 'Rajkot,360001',
//             time: 'Part-Time',
//             price: '1000-20000',
//             day: '18 d ago',
//             direction: '~3 - 4 Mi',
//             min: '~5min',
//             content: 'Turn-To AI Profile Match',
//             login: 'Login To See Profile Matching'
//         },
//         {
//             id: 10,
//             title: 'Marketing Consultant',
//             subtitle: 'Tailwind',
//             location: 'Rajkot,360001',
//             time: 'Part-Time',
//             price: '1000-20000',
//             day: '18 d ago',
//             direction: '~3 - 4 Mi',
//             min: '~5min',
//             content: 'Turn-To AI Profile Match',
//             login: 'Login To See Profile Matching'
//         },
//     ];


//     const togglePopup = (id: number) => {
//         if (activePopupId === id) {
//             setActivePopupId(null);
//         } else {
//             setActivePopupId(id);
//         }
//     };

//     const toggleBookmark = (id: number) => {
//         setBookmarkedItems(prev => ({
//             ...prev,
//             [id]: !prev[id]
//         }));
//     };

//     const handleContextMenu = (event: React.MouseEvent, id: number) => {
//         event.preventDefault();
//         togglePopup(id);
//     };

//     const handleItemClick = (id: number) => {
//         setSelectedItemcard(id);
//         setOpen(false);
//     };

//     const handleClosePopup = () => {
//         setActivePopupId(null);
//     };

//     const handleOpenPopup = () => {
//         setOpen(true);
//         // Reset scroll position to the top when opening the drawer
//         if (scrollContainerRef.current) {
//             scrollContainerRef.current.scrollTop = 0;
//         }
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (activePopupId !== null || isOpen) {
//                 setActivePopupId(null);
//                 setOpen(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [activePopupId, isOpen]);

//     const handleBackToList = () => {
//         setOpen(true);
//     };

//     if (selectedItemcard !== null) {
//         return <Map onBackClick={() => setSelectedItemcard(null)} onClick={() => setOpen(false)} onBackDrawerClick={handleBackToList} />
//     }

//     return (
//         <>
//             <div className='me-8'>
//                 <button onClick={handleOpenPopup} className='md:hidden block bottom-6 right-2 h-8 w-20 rounded-lg px-2 py-1 font-bold bg-[#5932EA] text-center text-white fixed'>Job List</button>
//             </div>
//             <Sheet isOpen={isOpen} onClose={() => setOpen(false)}
//                 snapPoints={[600, 400, 200, 0]}
//                 initialSnap={1}
//                 ref={ref}
//                 className='md:hidden block'
//             >
//                 <Sheet.Container>
//                     <Sheet.Header className='shadow-xl shadow-gray-300 p-2'>
//                         <div className="flex justify-start items-start">
//                             <div className="w-1/3 font-bold">
//                                 <p>Latest job</p>
//                             </div>
//                             <div className="w-1/3 font-bold flex justify-center items-center">
//                                 <AiOutlineLine className='mt-1' />
//                             </div>
//                             <div className="w-1/3 font-bold justify-end items-end flex">
//                                 <p>2/2 Jobs</p>
//                             </div>
//                         </div>
//                     </Sheet.Header>
//                     <Sheet.Content>
//                         <div className='md:hidden block'>
//                             <div className='flex w-screen p-1 justify-center items-center md:hidden block' onClick={handleClosePopup}>
//                                 <div className='text-sm'>
//                                     <div ref={scrollContainerRef} className="h-[calc(185dvh-95dvh)] md:overflow-y-scroll overflow-scroll md:hidden block" onScroll={() => setActivePopupId(null)}>
//                                         {items.map((item) => (
//                                             <div key={item.id} onContextMenu={(e) => handleContextMenu(e, item.id)} className="block flex p-2 w-screen mt-3 overflow-scroll bg-white border border-blue-200 rounded-lg shadow">
//                                                 <div className="flex w-3/2">
//                                                     <div onClick={() => handleItemClick(item.id)}>
//                                                         <div className="flex md:flex-row flex-col">
//                                                             <div className="md:w-1/2">
//                                                                 <p className="font-bold md:text-md text-md ">{item.title}</p>
//                                                             </div>
//                                                             <div className="md:w-1/2 flex justify-end items-end relative">
//                                                                 <button onClick={() => togglePopup(item.id)} className="text-gray-500 focus:outline-none md:block hidden">
//                                                                     <BsThreeDotsVertical />
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                         <div className="flex">
//                                                             <div className="md:w-1/2 md:text-md text-xs">
//                                                                 <p className="text-blue-400">{item.subtitle}</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className="flex mt-1">
//                                                             <div className="md:w-1/4 flex">
//                                                                 <IoLocationOutline />
//                                                                 <p className="ms-1 text-xs">{item.location}</p>
//                                                             </div>
//                                                             <div className="md:w-1/4 flex ms-2">
//                                                                 <FaRegClock />
//                                                                 <p className="ms-1 text-xs">{item.time}</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className="flex mt-1">
//                                                             <div className="md:w-1/4 w-24 flex md:ms-0">
//                                                                 <LuDollarSign />
//                                                                 <p className="text-xs flex">{item.price}</p>
//                                                             </div>
//                                                             <div className="md:w-1/4 w-20 flex">
//                                                                 <CiCalendar />
//                                                                 <p className="ms-1 text-xs">{item.day}</p>
//                                                             </div>
//                                                             <div className="md:w-28 w-20 flex">
//                                                                 <GrDirections />
//                                                                 <p className="ms-1 text-xs">{item.direction}</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className="md:w-1/2 mt-1 flex">
//                                                             <FaRegClock />
//                                                             <p className="ms-1 text-xs">{item.min}</p>
//                                                         </div>
//                                                         <div className="md:text-md text-xs font-bold mt-1 underline">{item.content}</div>
//                                                         <div className="text-blue-400 md:text-md mt-1 text-xs font-medium">{item.login}</div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="w-1/2">
//                                                     <div className="md:w-1/2 w-full flex justify-end items-end">
//                                                         {bookmarkedItems[item.id] ? (
//                                                             <FaBookmark
//                                                                 style={{ color: 'black', cursor: 'pointer' }}
//                                                                 onClick={() => toggleBookmark(item.id)}
//                                                             />
//                                                         ) : (
//                                                             <FaRegBookmark
//                                                                 style={{ color: 'gray', cursor: 'pointer' }}
//                                                                 onClick={() => toggleBookmark(item.id)}
//                                                             />
//                                                         )}
//                                                     </div>
//                                                     <div className='flex justify-end items-end mx-auto ms-8 mt-6'>
//                                                         <FaDirections />
//                                                     </div>
//                                                 </div>
//                                                 {activePopupId === item.id && (
//                                                     <div className='flex justify-end items-end'>
//                                                         <div id="popupMenu" className="absolute mt-2 w-58 py-2 bg-white border border-gray-200 rounded-lg shadow-xl z-10 text-sm">
//                                                             <RWebShare data={{ text: text, title: title, url: url }}>
//                                                                 <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100">
//                                                                     <button className='flex'>
//                                                                         <IoMdShare /><span className='ms-2'>Share This Job</span>
//                                                                     </button>
//                                                                 </a>
//                                                             </RWebShare>
//                                                             <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><ImNewTab className='mt-1' /><span className='ms-2'>Open In New Tab</span></a>
//                                                             <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><MdBlockFlipped className='mt-1' /><span className='ms-2'>Not Interested</span></a>
//                                                             <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-100"><CiFlag1 className='mt-1' /><span className='ms-2'>Problem With This Job?</span></a>
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Sheet.Content>
//                 </Sheet.Container>
//                 <Sheet.Backdrop onClick={() => setOpen(false)} />
//             </Sheet>
//         </>
//     );
// };

// export default Drawercard;




