import React from 'react';
import Filters from '../Filters/Filters';
import './sidebar.scss';

interface ISidebarProps { }

const Sidebar: React.FC<ISidebarProps> = () => {
    return (
        <>
            <div className="sidebar">
                <Filters />
            </div>
        </>
    );
};

export default Sidebar;