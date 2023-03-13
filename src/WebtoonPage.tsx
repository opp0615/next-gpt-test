import React from 'react';
import { Episode } from '../src/types';
import Webtoon from '../src/Webtoon';
import ChaptersList from '../src/ChapterList';
import { dummyChapters } from '../src/constant';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLikes } from './webtoonPageSlice';
import { RootState } from './store';

const WebtoonPage = ({ episode }: { episode: Episode }) => {
  const dispatch = useDispatch();
  const episodeLikes = useSelector((state: RootState) => state.webtoonPage.episodeLikes);
  const likes = episodeLikes[episode.id] ?? 0;

  const handleLike = () => {
    dispatch(incrementLikes(episode.id));
  };
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Webtoon component on top (if screen is smaller than md) */}
      <div className="flex justify-center w-full md:w-1/3  md:hidden">
        <Webtoon episode={episode} likes={likes} onLike={handleLike} />
      </div>

      {/* ChaptersList component on bottom (if screen is smaller than md) */}
      <div className="w-full md:w-2/3 mt-4 md:mt-0 md:hidden">
        <ChaptersList chapters={dummyChapters} />
      </div>

      {/* Webtoon component on left (if screen is larger than md) */}
      <div className="md:flex md:justify-center hidden w-1/3">
        <Webtoon episode={episode} likes={likes} onLike={handleLike} />
      </div>

      {/* ChaptersList component on right (if screen is larger than md) */}
      <div className="hidden md:block w-2/3 ml-4">
        <ChaptersList chapters={dummyChapters} />
      </div>
    </div>
  );
};

export default WebtoonPage;
