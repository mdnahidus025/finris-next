"use client";
import { useFinrisContext } from '@/components/context/useFinrisContext';
import { NavItemSingle } from '@/contents/footer/footerType';
import { navItemsSingle } from '@/contents/nav/nav';
import Link from 'next/link';
import React from 'react';

const ManuListOnePage: React.FC = () => {
    const { scrollToSection, activeSection } = useFinrisContext();

    return (
        <ul className="main-menu__list">
            {
                navItemsSingle.map((item: NavItemSingle, i) => <li key={i} className={item?.linkId === activeSection ? 'current' : ''}>
                    <Link href={`#${item.linkId}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.linkId);
                        }}
                    >
                        {item.navItem}
                    </Link>
                </li>)
            }
        </ul>
    );
}
export default ManuListOnePage;