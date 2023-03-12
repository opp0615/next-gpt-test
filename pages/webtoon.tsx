import ChaptersList from '../src/ChapterList';
import { Episode } from '../src/types';
import Webtoon from '../src/Webtoon';
import { dummyChapters } from '../src/constant';
export default function WebtoonPage() {
  const testEpisode: Episode = {
    name: '테스트 작품',
    artist: '홍길동',
    thumbnail: '/images/test.jpg',
    banner: '/images/test.jpg',
    description:
      '테스트 작품 설명을 작성합니다. 테스트 작품 설명을 작성합니다. 테스트 작품 설명을 작성합니다.테스트 작품 설명을 작성합니다.테스트 작품 설명을 작성합니다.',
  };

  return (
    <>
      <div className="pt-[76px]">
        <Webtoon episode={testEpisode} likes={2} onLike={() => {}} />
        <ChaptersList chapters={dummyChapters} />
      </div>
    </>
  );
}
