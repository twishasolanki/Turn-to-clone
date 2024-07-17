import React from 'react';

interface RightsidebarProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
}

const Rightsidebar: React.FC<RightsidebarProps> = ({ isOpen, onClose, content }) => {
    return (
        <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <button onClick={onClose} className="p-2 text-black">Close</button>
            <div className="p-4">
                {content}
            </div>
        </div>
    );
}

export default Rightsidebar;
