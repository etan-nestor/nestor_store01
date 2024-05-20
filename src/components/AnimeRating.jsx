import React, { useState, useEffect } from 'react';
import './animeRating.css';

const AnimeRating = ({ rating }) => {
    const [stars, setStars] = useState([]);

    const generateStars = () => {
        if (rating > 5 || rating < 1) {
            return [];
        }
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(i);
        }
        return stars;
    };

    useEffect(() => {
        setStars(generateStars());
    }, [rating]);

    return (
        <div className='animeRating'>
            {
                stars.map((star, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                ))
            }
        </div>
    );
}

export default AnimeRating;
