import React from 'react';
import { Link } from 'react-router-dom';
import navListData from '../data/navListData';

const NavListItem = ({ item, navOnClick }) => {
    return (
        <li>
            <Link to='/' className={`${item.active ? 'active' : undefined}`} onClick={() => navOnClick(item._id,item.target)}>
                <i className={`bi ${item.icon}`}></i>
                <span className="navName">
                    {item.name}
                </span>
            </Link>
        </li>
    )
}

export default NavListItem