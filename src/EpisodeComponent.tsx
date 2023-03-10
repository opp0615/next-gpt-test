import React from 'react';
import Image from 'next/image';
import { Episode } from './types';

interface Props {
  episode: Episode;
}

const EpisodeComponent: React.FC<Props> = ({ episode }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-2 overflow-hidden rounded-full">
        <Image src={episode.thumbnail} alt={episode.name} layout="responsive" width={300} height={300} />
      </div>
      <h3 className="text-lg font-bold text-center">{episode.name}</h3>
      <p className="text-sm text-gray-600">{episode.artist}</p>
    </div>
  );
};

export default EpisodeComponent;
