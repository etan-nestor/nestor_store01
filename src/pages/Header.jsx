import React from 'react';
import './header.css';

const user = require('../images/user.png')

const Header = ({toggleActive}) => {
    return (
        <header>
            <a href="#" className="menu" onClick={toggleActive}>
                <i className="bi bi-sliders"></i>
            </a>
            <div className="userItems">
                <a href="#" className="icon">
                    <i className="bi bi-heart-fill"></i>
                    <span className="like">0</span>
                </a>
                <a href="#" className="icon">
                    <i className="bi bi-bag-fill"></i>
                    <span className="bag">0</span>
                </a>
                <div className="avatar">
                    <a href="">
                        <img src={user} alt="user avatar" />
                    </a>
                    <div className="user">
                        <span>
                            User Name
                        </span>
                        <a href="#">View Profil</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header