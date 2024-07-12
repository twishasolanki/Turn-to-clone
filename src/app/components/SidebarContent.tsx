'use client'
import React from 'react';

interface MenuItem {
    icons: React.ReactNode;
    label: string;
}

interface SidebarContentProps {
    menuItems: MenuItem[];
    open: boolean;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ menuItems, open }) => {
    return (
        <div>
            <ul className="flex-1 text-sm">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="px-3 py-2 my-2 hover:bg-[#5932EA] rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
                    >
                        <div>{item.icons}</div>
                        <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                        <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}>
                            {item.label}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SidebarContent;
