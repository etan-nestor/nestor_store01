import React, { useState } from 'react';

import './sideMenu.css';
import navListData from '../data/navListData';
import NavListItem from './NavListItem';

function SideMenu({active,sectionActive}) {
    const [navData, setNavData] = useState(navListData);

    const handleNavOnClick = (id,target)=>{
        console.log(id);
        const newNavData = navData.map((nav)=>{
            nav.active = false;
            if(nav._id === id) nav.active = true;
            return nav;
        }
        );
        setNavData(newNavData);
        sectionActive(target);
    }

    return (
        <div className={`sideMenu ${active ? 'active' : undefined}`}>
            <a href="#" className="logo">
            <i class="bi bi-dpad"></i>
                <span className="brand">Anime</span>
            </a>
            <ul className="nav">
                {
                    navData.map((item) => (
                        <NavListItem key={item._id} item={item} navOnClick={handleNavOnClick} />
                    ))
                }
            </ul>
            <ul className="social">
                <li>
                    <a href="#">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="bi bi-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="share">
                    <i className="bi bi-share"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SideMenu