import { useRouter } from 'next/router';
import { useMovieQuery } from '../src/useMoiveQuery';

const Movies = () => {
  const { data, isLoading, isError, error } = useMovieQuery();
  console.log(isLoading, error, data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div className="flex flex-col items-center">
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt={`${data.title} poster`}
        className="w-1/2 rounded-lg shadow-lg"
      />
      <h1 className="mt-6 text-3xl font-bold">{data.title}</h1>
      <div className="flex mt-2">
        {data.genres.map((genre) => (
          <div key={genre.id} className="px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            {genre.name}
          </div>
        ))}
      </div>
      <div className="mt-4 text-lg leading-relaxed">{data.overview}</div>
      <div className="mt-4 text-sm font-medium">
        <span className="mr-4">Release Date: {new Date(data.release_date).toLocaleDateString()}</span>
        <span className="mr-4">Runtime: {data.runtime} minutes</span>
        <span className="mr-4">IMDb Rating: {data.vote_average}</span>
      </div>
    </div>
  );
};

export default Movies;
