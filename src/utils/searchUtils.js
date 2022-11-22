import { SHORT_MOVIE_DURATION } from './constants';

export const filterMovies = (movies, { string, isShortMovies }) => {
  return movies.filter((movie) => {
    if (
      !(isShortMovies && movie.duration <= SHORT_MOVIE_DURATION) &&
      !(!isShortMovies && movie.duration >= SHORT_MOVIE_DURATION)
    ) {
      return false;
    }

    if (
      !movie.nameRU.toLowerCase().includes(string.toLowerCase()) &&
      !movie.nameEN.toLowerCase().includes(string.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
};
