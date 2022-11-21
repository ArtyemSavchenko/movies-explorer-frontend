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
      authorization: getToken(),
    },
  });

  return checkApiError(res);
};

export const patchUser = async (name, email) => {
  const res = await fetch(`${MAIN_BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });

  return checkApiError(res);
};
