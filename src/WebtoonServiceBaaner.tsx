import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

interface WebtoonServiceBannerProps {
  images: string[];
}

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const WebtoonServiceBanner: React.FC<WebtoonServiceBannerProps> = ({ images }) => {
  const renderPaginationBullet = (index: number, className: string): string => {
    return `<span class="${className} bg-gradient-to-tl rounded-full w-10 h-10" style="background-color:#fff;"></span>`;
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

      <div className="swiper-button-prev" style={{ width: '50px', height: '50px' }}>
        <div className="flex items-center justify-center w-full h-full rounded-full bg-white/80">
          <AiOutlineLeft size={20} color={'black'} />
        </div>
      </div>

      <div className="swiper-button-next" style={{ width: '50px', height: '50px' }}>
        <div className="flex items-center justify-center w-full h-full rounded-full bg-white/80">
          <AiOutlineRight size={20} color={'black'} />
        </div>
      </div>
    </Swiper>
  );
};

export default WebtoonServiceBanner;
