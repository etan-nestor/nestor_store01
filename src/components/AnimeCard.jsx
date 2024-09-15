import React, { useContext } from 'react';
import './animeCard.css';
import { AppContext } from '../App';
import AnimeRating from './AnimeRating';


const formatReleaseDate = (timestamp) => {
  if (!timestamp || typeof timestamp !== 'object') return '';
  const seconds = timestamp.seconds;
  const date = new Date(seconds * 1000); // Convertir les secondes en millisecondes
  return date.toLocaleDateString(); // Formater la date en chaîne de caractères lisible
};


const AnimeCard = ({ anime }) => {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);

  const handleAddToLibrary = (anime) => {
    setLibrary([...library, anime]);
  };

  // Convertir releaseDate en chaîne de caractères lisible
  const releaseDate = formatReleaseDate(anime.releaseDate);

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="animeCard">
        <img src={anime.imgUrl} alt={anime.title} className="img-fluid" />
        <a href="#" className="like" onClick={() => handleAddToLibrary(anime)}>
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="animeFeature">
          <span className="animeType">{releaseDate}</span>
          <AnimeRating rating={anime.rating} />
        </div>
        <div className="animeTitle mt-4 mb-3">
          {anime.title}
        </div>
        <div className="animePrice">
          {
            anime.discount !== 0 && (
              <>
                <span className="discount">
                  <i>{(((anime.discount).toFixed(2)) * 100)}%</i>
                </span>
                <span className="prevPrice">
                  {(anime.price).toFixed(2)}
                </span>
              </>
            )
          }
          <span className="currentPrice">
            ${((1 - anime.discount) * anime.price).toFixed(2)}
          </span>
        </div>
        <a href="#" className="addBag">
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default AnimeCard;
