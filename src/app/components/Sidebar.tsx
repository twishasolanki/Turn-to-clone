// 'use client'
// import React, { useState } from 'react';
// import { MdMenuOpen } from 'react-icons/md';
// import SidebarContent from './SidebarContent';
// import { GrMapLocation } from "react-icons/gr";
// import { TbWorldSearch } from "react-icons/tb";
// import { MdOutlineDashboard } from 'react-icons/md';
// import { CiSettings } from 'react-icons/ci';
// import { GrUserSettings } from "react-icons/gr";
// import { MdLogout } from "react-icons/md";

// interface MenuItem {
//     icons: React.ReactNode;
//     label: string;
// }

// const menuItems: MenuItem[] = [
//     {
//         icons: <GrMapLocation size={30} />,
//         label: 'Job Map'
//     },
//     {
//         icons: <TbWorldSearch size={30} />,
//         label: 'Explorer'
//     },
//     {
//         icons: <MdOutlineDashboard size={30} />,
//         label: 'Job Management'
//     },
//     {
//         icons: <CiSettings size={30} />,
//         label: 'Resources'
//     },
//     {
//         icons: <GrUserSettings size={30} />,
//         label: 'Account Settings'
//     },
//     {
//         icons: <MdLogout size={30} />,
//         label: 'Log Out'
//     },
// ];

// const Sidebar: React.FC = () => {
//     const [open, setOpen] = useState(true);
//     return (
//         <>
//             <nav className={`sidenav shadow-md min-h-screen position-fixed md:block hidden p-2 flex-col relative duration-500 bg-gray-200 text-black ${open ? 'w-64' : 'w-16'}`}id="mySidenav">
//                 <div className="px-3 py-2 h-20 flex justify-between items-center ">
//                     <img src='./assets/logo.png' alt="Logo" className={`${open ? 'w-32 md:block' : 'w-10 hidden'} rounded-md`} />
//                     <div>
//                         <MdMenuOpen size={34} className={`duration-500 cursor-pointer ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} />
//                     </div>
//                 </div>
//                 <SidebarContent menuItems={menuItems} open={open} />
//             </nav>
//   </>
//     );
// }

// export default Sidebar;



'use client'
import React, { useState } from 'react';
import { MdMenuOpen } from 'react-icons/md';
import SidebarContent from './SidebarContent';
import { GrMapLocation } from "react-icons/gr";
import { TbWorldSearch } from "react-icons/tb";
import { MdOutlineDashboard } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { GrUserSettings } from "react-icons/gr";
import { MdLogout } from "react-icons/md";

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

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(true);
    const [hover, setHover] = useState(false);

    return (
        <>
            <nav
                className={`sidenav shadow-md min-h-screen position-fixed md:block hidden p-2 flex-col relative duration-500 bg-gray-200 text-black ${open || hover ? 'w-64' : 'w-16'}`}
                id="mySidenav"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="px-3 py-2 h-20 flex justify-between items-center ">
                    <img src='./assets/logo.png' alt="Logo" className={`${open || hover ? 'w-32 md:block' : 'w-10 hidden'} rounded-md`} />
                    <div>
                        <MdMenuOpen size={34} className={`duration-500 cursor-pointer ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} />
                    </div>
                </div>
                <SidebarContent menuItems={menuItems} open={open || hover} />
            </nav>
        </>
    );
}

export default Sidebar;
