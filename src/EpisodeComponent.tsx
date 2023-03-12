import React from 'react';
import Image from 'next/image';
import { Episode } from './types';
import Link from 'next/link';

interface Props {
  episode: Episode;
}

const EpisodeComponent: React.FC<Props> = ({ episode }) => {
  return (
    <Link href={`/webtoon/${episode.id}`} className="cursor-pointer">
      <div className="flex flex-col items-center w-[150px]">
        <div className="w-32 h-40 mb-2 overflow-hidden rounded-[10px]">
          <Image src={episode.thumbnail} alt={episode.name} width={256} height={320} />
        </div>
        <h3 className="text-lg font-bold text-center whitespace-normal break-normal">{episode.name}</h3>
        <p className="text-sm text-gray-600">{episode.artist}</p>
      </div>
    </Link>
  );
};

export default EpisodeComponent;
