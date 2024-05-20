import React, { useState } from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import AnimeSlide from './AnimeSlide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './animeSwiper.css';

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

const AnimeSwiper = ({ animes }) => {
    const [active, setActive] = useState(false);
    const handleToggleVideo = () => {
        setActive(!active)
    }
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            navigation={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 35,
                stretch: 200,
                depth: 250,
                modifier: 1,
                slideShadows: true,
            }}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="animeSwiper"
        >
            {
                animes.map(anime => (
                    <SwiperSlide key={anime._id}>
                        <AnimeSlide
                            anime={anime}
                            active={active}
                            toggleVideo={handleToggleVideo} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default AnimeSwiper