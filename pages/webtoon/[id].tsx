import { useRouter } from 'next/router';
import WebtoonPage from '../../src/WebtoonPage';
import { romanceEpisodeList, fantasyEpisodeList } from '../../src/constant';

const Webtoon = () => {
  const router = useRouter();
  const { id } = router.query;
  const webtoonList = [...romanceEpisodeList, ...fantasyEpisodeList];
  const webtoon = webtoonList.find((w) => w.id === id);

  if (!webtoon) {
    return <div>Webtoon not found</div>;
  }

  return <WebtoonPage episode={webtoon} />;
};

export default Webtoon;
