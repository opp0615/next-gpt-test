import React from 'react';
import { Episode, Chapter } from '../src/types';
import Webtoon from '../src/Webtoon';
import ChaptersList from '../src/ChapterList';
import { dummyChapters } from '../src/constant';

const WebtoonPage: React.FC = () => {
  const testEpisode: Episode = {
    name: '테스트 작품',
    artist: '홍길동',
    thumbnail: '/images/test.jpg',
    banner: '/images/test.jpg',
    description:
      '테스트 작품 설명을 작성합니다. 테스트 작품 설명을 작성합니다. 테스트 작품 설명을 작성합니다.테스트 작품 설명을 작성합니다.테스트 작품 설명을 작성합니다.',
  };
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Webtoon component on top (if screen is smaller than md) */}
      <div className="w-full md:w-1/2  md:hidden">
        <Webtoon episode={testEpisode} likes={0} onLike={() => {}} />
      </div>

      {/* ChaptersList component on bottom (if screen is smaller than md) */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:hidden">
        <ChaptersList chapters={dummyChapters} />
      </div>

      {/* Webtoon component on left (if screen is larger than md) */}
      <div className="hidden md:block w-1/2">
        <Webtoon episode={testEpisode} likes={0} onLike={() => {}} />
      </div>

      {/* ChaptersList component on right (if screen is larger than md) */}
      <div className="hidden md:block w-1/2 ml-4">
        <ChaptersList chapters={dummyChapters} />
      </div>
    </div>
  );
};

export default WebtoonPage;
