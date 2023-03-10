import React, { useRef } from 'react';
import EpisodeComponent from './EpisodeComponent';
import { Episode } from './types';
import { useSwipeable } from 'react-swipeable';

interface Props {
  title: string;
  episodes: Episode[];
}

const EpisodeSection: React.FC<Props> = ({ title, episodes }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += containerRef.current.clientWidth;
      }
    },
    onSwipedRight: () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= containerRef.current.clientWidth;
      }
    },
  });

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="flex overflow-x-auto" {...handleSwipe} ref={containerRef}>
        {episodes.map((episode) => (
          <div className="flex-none mr-4" key={episode.name}>
            <EpisodeComponent episode={episode} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeSection;
