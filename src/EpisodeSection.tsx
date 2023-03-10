import React, { useRef } from 'react';
import EpisodeComponent from './EpisodeComponent';
import { Episode } from './types';
import { useState } from 'react';

interface Props {
  title: string;
  episodes: Episode[];
}

const EpisodeSection: React.FC<Props> = ({ title, episodes }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (amount: number) => {
    if (containerRef.current) {
      const newPosition = scrollPosition + amount;
      setScrollPosition(newPosition);
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => handleScroll(-containerRef.current!.clientWidth);
  const scrollRight = () => handleScroll(containerRef.current!.clientWidth);

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="flex items-center">
        <button
          className="px-2 py-1 mr-2 bg-gray-200 rounded-md hover:bg-gray-300"
          disabled={scrollPosition === 0}
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <div
          className="flex flex-grow overflow-x-auto"
          ref={containerRef}
          onScroll={() => setScrollPosition(containerRef.current?.scrollLeft ?? 0)}
        >
          {episodes.map((episode) => (
            <div className="flex-none mr-4" key={episode.name}>
              <EpisodeComponent episode={episode} />
            </div>
          ))}
        </div>
        <button
          className="px-2 py-1 ml-2 bg-gray-200 rounded-md hover:bg-gray-300"
          disabled={
            (containerRef.current &&
              containerRef.current.clientWidth + scrollPosition >= containerRef.current.scrollWidth) ??
            undefined
          }
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default EpisodeSection;
