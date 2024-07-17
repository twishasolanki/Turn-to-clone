import React from 'react';
import { MenuItem } from '@/app/components/Sidebar'; // Adjust the import path as necessary


interface SidebarContentProps {
    menuItems: MenuItem[];
    open: boolean;
    onMenuItemClick: (content: string) => void;
}

const Rightsidebarcontent: React.FC<SidebarContentProps> = ({ menuItems, open, onMenuItemClick }) => {
    return (
        <ul className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
                <li key={index} onClick={() => onMenuItemClick(item.content)} className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-200">
                    {item.icons}
                    <span className={`${open ? 'block' : 'hidden'}`}>{item.label}</span>
                </li>
            ))}
        </ul>
    );
}

export default Rightsidebarcontent;
