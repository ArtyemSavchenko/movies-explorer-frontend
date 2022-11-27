import { MOVIE_BASE_URL } from '../utils/constants';

import { checkApiError } from './checkApiError';

export const getMovies = async () => {
  const res = await fetch(`${MOVIE_BASE_URL}`);
  return checkApiError(res);
};
