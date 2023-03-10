import WebtoonServiceBanner from '../src/WebtoonServiceBaaner';
import EpisodeComponent from '../src/EpisodeComponent';
import EpisodeSection from '../src/EpisodeSection';
import { Episode } from '../src/types';

export default function Home() {
  const images = [
    'https://cdn.pixabay.com/photo/2023/02/26/16/06/squirrel-7816229_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/01/31/19/52/dog-7758887_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/05/06/23/koala-7830706_1280.jpg',
  ];
  const testEpisode: Episode = { name: '테스트 작품', artist: '홍길동', thumbnail: '/images/test.jpg' };

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[720px] w-full">
          <div className="flex justify-center w-full h-[400px]">
            <WebtoonServiceBanner images={images} />
          </div>
          <div className="mt-5">
            <EpisodeSection
              title="섹션 테스트"
              episodes={[testEpisode, testEpisode, testEpisode, testEpisode, testEpisode, testEpisode, testEpisode]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
