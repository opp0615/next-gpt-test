import React from 'react';
import EpisodeComponent from './EpisodeComponent';
import { Episode } from './types';

interface Props {
  title: string;
  episodes: Episode[];
}

const EpisodeSection: React.FC<Props> = ({ title, episodes }) => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="flex overflow-x-auto">
        {episodes.map((episode) => (
          <div className="flex-none" key={episode.name}>
            <EpisodeComponent episode={episode} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeSection;
