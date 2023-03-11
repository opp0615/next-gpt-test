import WebtoonServiceBanner from '../src/WebtoonServiceBaaner';
import Header from '../src/Header';
import EpisodeSection from '../src/EpisodeSection';
import { Episode } from '../src/types';
import { fantasyEpisodeList, romanceEpisodeList } from '../src/constant';

export default function Home() {
  const images = ['/banner/romance5.png', '/banner/fantasy4.png'];
  const testEpisode: Episode = { name: '테스트 작품', artist: '홍길동', thumbnail: '/images/test.jpg' };

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[720px] w-full">
          <div className="flex justify-center w-full h-[500px]">
            <WebtoonServiceBanner images={images} />
          </div>
          <div className="mt-5">
            <EpisodeSection title="로맨스" episodes={romanceEpisodeList} />
          </div>
          <div className="mt-5">
            <EpisodeSection title="판타지" episodes={fantasyEpisodeList} />
          </div>
          <div className="mt-5">
            <EpisodeSection
              title="섹션 테스트"
              episodes={[testEpisode, testEpisode, testEpisode, testEpisode, testEpisode, testEpisode, testEpisode]}
            />
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
