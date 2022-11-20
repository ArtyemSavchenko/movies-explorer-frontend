import { MOVIE_COVER_URL } from '../utils/constants';

import { checkApiError } from './checkApiError';

export const getMovies = async () => {
  const res = await fetch(`${MOVIE_COVER_URL}`);
  return checkApiError(res);
};


