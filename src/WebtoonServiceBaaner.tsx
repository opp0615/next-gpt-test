import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

interface WebtoonServiceBannerProps {
  images: string[];
}

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const WebtoonServiceBanner: React.FC<WebtoonServiceBannerProps> = ({ images }) => {
  return (
    <Swiper navigation pagination={{ clickable: true }} className="h-full" loop>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Webtoon Service Banner ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WebtoonServiceBanner;
