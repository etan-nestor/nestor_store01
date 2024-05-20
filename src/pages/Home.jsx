import React from 'react';
import AnimeSwiper from '../components/AnimeSwiper';

import './home.css';
import AnimeCard from '../components/AnimeCard';


const Home = ({ animes }) => {
  return (
    <section id="home" className="home active">
      <div className="container-fluid">
        <div className="row">
          <AnimeSwiper animes={animes} />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Animes on production</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="#" className="viewMore">
              View More Animes
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row">
          {
            animes.slice(0, 4).map((anime) => (
              <AnimeCard key={anime._id} anime={anime} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Home