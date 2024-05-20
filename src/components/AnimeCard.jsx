import React from 'react';
import './animeCard.css';
import AnimeRating from './AnimeRating';

const AnimeCard = ({ anime }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <img src={anime.img} alt={anime.title} className="img-fluid" />
      <a href="#">
        <i className="bi bi-heart-fill"></i>
      </a>
      <div className="animeFeature">
        <span className="animeType">{anime.level}</span>
        <AnimeRating rating={anime.rating} />
      </div>
      <div className="animeTitle mt-4 mb-3">
        {anime.title}
      </div>
      <div className="animePrice">
        {
          anime.discount != 0 && (
            <>
              <span className="discount">
                <i>{anime.discount*100}%</i>
              </span>
              <span className="prevPrice">
                {anime.price.toFixed(2)}
              </span>
            </>
          )
        }
        <span className="currentPrice">
          ${(1-anime.discount)*anime.price.toFixed(2)}
        </span>
      </div>
      <a href="#" className="addBag">
        <i className="bi bi-bag-plus-fill"></i>
      </a>
    </div>
  )
}

export default AnimeCard