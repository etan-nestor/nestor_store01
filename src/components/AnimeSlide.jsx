import React from 'react';
import { SwiperSlide } from 'swiper/react';


const AnimeSlide = ({ anime, active, toggleVideo }) => {
    return (
        <SwiperSlide>
            <div className="animeSlider">
                <img src={anime.imgUrl} alt="Anime Image" />
                <div className={`video ${active ? 'active' : undefined}`}>
                    <iframe
                        width="1280"
                        height="720"
                        src={anime.trailer}
                        title={anime.title}
                        allow="accelerometer;clipboard-write;encrypted-media;gyroscope;picture-in-picture;"
                        allowFullScreen
                    >

                    </iframe>
                </div>
                <div className="content">
                    <h2>{anime.title}</h2>
                    <p>{anime.description}</p>
                    <div className="buttons">
                        <a href="#" className="orderBtn">
                            View all
                        </a>
                        <a href="#" className={`watchBtn ${active ? 'active' : undefined}`} onClick={toggleVideo}>
                            <span className="pause">
                                <i className="bi bi-pause-fill"></i>
                            </span>
                            <span className="watch">
                                <i className="bi bi-play-fill"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default AnimeSlide