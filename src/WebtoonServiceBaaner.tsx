import React, { useState } from 'react';

interface WebtoonServiceBannerProps {
  images: string[];
}

const WebtoonServiceBanner: React.FC<WebtoonServiceBannerProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    } else if (direction === 'right') {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-24 md:h-36">
      <div className="flex items-center justify-center w-full h-24 overflow-hidden md:h-36">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-full h-full absolute transition duration-500 ${
              index === currentImageIndex
                ? 'opacity-100'
                : 'opacity-0 translate-x-full md:translate-y-full md:rotate-90'
            }`}
            src={image}
            alt={`Webtoon Service Banner ${index}`}
          />
        ))}
      </div>
      <div className="absolute bottom-0 w-full h-6 bg-white"></div>
      <div
        className="absolute inset-y-0 left-0 z-10 flex items-center justify-center w-1/3 cursor-pointer md:w-1/6"
        onClick={() => handleSwipe('right')}
      >
        <span className="text-4xl text-white md:text-5xl">&lt;</span>
      </div>
      <div
        className="absolute inset-y-0 right-0 z-10 flex items-center justify-center w-1/3 cursor-pointer md:w-1/6"
        onClick={() => handleSwipe('left')}
      >
        <span className="text-4xl text-white md:text-5xl">&gt;</span>
      </div>
    </div>
  );
};

export default WebtoonServiceBanner;
