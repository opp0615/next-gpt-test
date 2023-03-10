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
  const renderPaginationBullet = (index: number, className: string): string => {
    return `<span class="${className} bg-gradient-to-tl from-blue-600 to-purple-600 rounded-full w-10 h-10" style="background-color:#805ad5;"></span>`;
  };

  return (
    <Swiper
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        renderBullet: renderPaginationBullet,
      }}
      className="h-full"
      loop
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Webtoon Service Banner ${index}`} />
        </SwiperSlide>
      ))}

      <div className="swiper-button-prev">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tl from-blue-600 to-purple-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </div>

      <div className="swiper-button-next">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tl from-blue-600 to-purple-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </Swiper>
  );
};

export default WebtoonServiceBanner;
