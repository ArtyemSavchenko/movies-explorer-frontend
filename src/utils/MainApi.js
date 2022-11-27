import { checkApiError } from './checkApiError';

import { MAIN_BASE_URL } from './constants';

const getToken = () => {
  return `Bearer ${localStorage.getItem('jwt')}`;
};

export const authorize = async (email, password) => {
  const res = await fetch(`${MAIN_BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return checkApiError(res);
};

export const register = async (email, password, name) => {
  const res = await fetch(`${MAIN_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  });

  return checkApiError(res);
};

export const getUser = async () => {
  const res = await fetch(`${MAIN_BASE_URL}/users/me`, {
    headers: {
      Authorization: getToken(),
    },
  });

  return checkApiError(res);
};

export const patchUser = async (name, email) => {
  const res = await fetch(`${MAIN_BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });

  return checkApiError(res);
};

export const likeMovie = async (movie) => {
  const res = await fetch(`${MAIN_BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailerLink: movie.trailerLink,
      thumbnail: movie.thumbnail,
      movieId: movie.movieId,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  });

  return checkApiError(res);
};

export const dislikeMovie = async (movieId) => {
  const res = await fetch(`${MAIN_BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      Authorization: getToken(),
    },
  });

  return checkApiError(res);
};

export const getLikedMovies = async () => {
  const res = await fetch(`${MAIN_BASE_URL}/movies`, {
    headers: {
      Authorization: getToken(),
    },
  });

  return checkApiError(res);
}
