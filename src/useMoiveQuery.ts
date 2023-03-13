import { useQuery } from 'react-query';
import { Movie } from './types';

const fetchMovie = async (): Promise<Movie> => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useMovieQuery = () => {
  return useQuery<Movie, Error>('movie', fetchMovie);
};
