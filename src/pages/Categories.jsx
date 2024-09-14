import React, { useState } from 'react';
import './categorie.css';
import filterListData from '../data/filterListData';
import AnimeCard from '../components/AnimeCard';

const Categories = ({ animes, reference }) => {

    const [data, setData] = useState(animes);
    const [filters, setFilters] = useState(filterListData);

    const handleFilterAnimes = (category) => {
        setFilters(
            filters.map((filter) => {
                filter.active = false;
                if (filter.name === category) {
                    filter.active = true;
                }
                return filter;
            })
        );
        if (category === 'All') {
            setData(animes);
            return;
        }
        setData(
            animes.filter((anime) => anime.category === category)
        )
    }

    const [text, setText] = useState('');
    const handleSearchAnimes = (e) => {
        setData(
            animes.filter(anime => anime.title.toLowerCase().includes(e.target.value.toLowerCase()))
        )
        setText(e.target.value);
    }

    return (
        <section id="categories" className="Categories" ref={reference}>
            <div className="contained-fluid mt-2">
                <div className="row">
                    <div className="col-lg-8 d-flex align-items-center justify-content-start">
                        <ul className="filters">
                            {
                                filters.map((filter) => (
                                    <li key={filter._id} className={`${filter.active ? 'active' : undefined}`} onClick={() => handleFilterAnimes(filter.name)}>
                                        {filter.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-end">
                        <div className="search">
                            <i className="bi bi-search"></i>
                            <input type="text" name="search" value={text} placeholder='Search' onChange={handleSearchAnimes} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map((anime) => (
                            <AnimeCard key={anime._id} anime={anime} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Categories