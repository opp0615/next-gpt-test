import React from 'react';
import { Episode } from './types';

interface WebtoonProps {
  episode: Episode;
  likes: number;
  onLike: () => void;
}

const Webtoon: React.FC<WebtoonProps> = ({ episode, likes, onLike }) => {
  const { thumbnail, name, artist, description, banner } = episode;

  return (
    <div className="flex flex-col items-center max-w-[512px]">
      <div className="relative h-[512px] w-[512px] pb-full rounded-2xl">
        <img src={banner} alt={name} className="absolute h-full w-full object-cover rounded-2xl" />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-gray-500">{artist}</p>
        {description && <p className="mt-2">{description}</p>}
      </div>
      <div className="flex items-center mt-4">
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2 mr-2" onClick={onLike}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M10 18.295L3.05 13.24C1.357 11.946.391 10.25.391 8.455c0-2.47 1.98-4.487 4.423-4.487 1.118 0 2.214.416 3.077 1.178C9.188 4.365 9.91 4 10.715 4c1.393 0 2.718.754 3.359 1.885.574 1.008.81 2.222.673 3.392l-.328 2.54L10 15.71l-.419-3.365-.327-2.55c-.137-1.17.1-2.384.673-3.392C12.597 4.754 13.923 4 15.316 4c.806 0 1.528.365 2.215.946.863-.762 1.96-1.178 3.077-1.178 2.443 0 4.423 2.017 4.423 4.487 0 1.796-.966 3.49-2.658 4.784L10 18.295z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1">{likes}</span>
        </button>
      </div>
    </div>
  );
};

export default Webtoon;
