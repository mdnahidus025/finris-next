"use client"
import React from 'react';
import VideoPopup from '../elememts/VideoPopup'; 
import ScrollToTop from '../elememts/ScrollToTop';
import CustomCursor from '../elememts/CustomCursorTwo';
import SearchProp from '../elememts/SearchProp';
import SideBar from '../elememts/SideBar';
import { useFinrisContext } from '../context/useFinrisContext';
import MobileNav from '../elememts/MobileNav';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isMobile, isSearch } = useFinrisContext();
    return (
        <div className={`custom-cursor ${isMobile ? "locked" : ""} ${isSearch ? 'search-active' : ''}`}>
            <CustomCursor enabled />
            {children}
            <MobileNav />
            <SideBar />
            <SearchProp />
            <ScrollToTop />
            <VideoPopup />
        </div>
    );
};

export default CustomLayout;