import React, { useState, useEffect, useRef } from 'react';
import './main.css';

import SideMenu from '../components/SideMenu';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import Bag from './Bag';
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';

function Main() {
    const [active, setActive] = useState(false);
    const [animes, setAnimes] = useState([]);

    const homeRef = useRef();
    const categoriesRef = useRef();
    const libraryRef = useRef();
    const bagRef = useRef();

    const sections = [
        {
            name: 'home',
            ref: homeRef,
            active: true,
        },
        {
            name: 'categories',
            ref: categoriesRef,
            active: false,
        },
        {
            name: 'library',
            ref: libraryRef,
            active: false,
        },
        {
            name: 'bag',
            ref: bagRef,
            active: false,
        },
    ];

    const handleSectionActive = (target) => {
        sections.map((section) => {
            section.ref.current.classList.remove('active');
            if (section.ref.current.id === target) {
                section.ref.current.classList.add('active');
            }
            return section;
        });
    };

    const handleToggleActive = () => {
        setActive(!active);
    };

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'animes'));
            const animeData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAnimes(animeData);
        } catch (error) {
            console.error("Error fetching anime data: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main>
            <SideMenu active={active} sectionActive={handleSectionActive} />
            <div className={`banner ${active ? 'active' : undefined}`}>
                <Header toggleActive={handleToggleActive} />
                <div className="container-fluid">
                    <Home animes={animes} reference={homeRef} />
                    <Categories animes={animes} reference={categoriesRef} />
                    <MyLibrary animes={animes} reference={libraryRef} />
                    <Bag animes={animes} reference={bagRef} />
                </div>
            </div>
        </main>
    );
}

export default Main;
