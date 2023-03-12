import React from 'react';
import { Episode } from './types';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';

interface WebtoonProps {
  episode: Episode;
  likes: number;
  onLike: () => void;
}

const Webtoon: React.FC<WebtoonProps> = ({ episode, likes, onLike }) => {
  const { thumbnail, name, artist, description, banner } = episode;

  return (
    <div className="flex flex-col items-center w-full max-w-[512px]">
      <div className="relative h-full min-h-[320px] max-h-[512px] w-full max-w-[512px] pb-full rounded-2xl">
        <img src={banner} alt={name} className="absolute h-full w-full object-cover rounded-2xl" />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-gray-500">{artist}</p>
        {description && <p className="mt-2">{description}</p>}
      </div>
      <div className="flex items-center mt-4">
        <button className="bg-gray-200 hover:bg-gray-300 rounded-lg px-5 py-2" onClick={onLike}>
          <BsFillHandThumbsUpFill size={20} />
          <span className="ml-1">{likes}</span>
        </button>
      </div>
    </div>
  );
};

export default Webtoon;
