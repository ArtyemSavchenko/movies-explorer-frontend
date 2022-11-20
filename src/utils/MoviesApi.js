import { MOVIE_API_URL } from '../utils/constants';

import { checkApiError } from './throwApiError';

export const getMovies = async () => {
  const res = await fetch(`${MOVIE_API_URL}`);
  return checkApiError(res);
};


