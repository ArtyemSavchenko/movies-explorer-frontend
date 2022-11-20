import { checkApiError } from "./checkApiError";

import { MAIN_BASE_URL } from "./constants"

const getToken = () => {
  return `Bearer ${localStorage.getItem('jwt')}`;
}

export const authorize = async (email, password) => {
  const res = await fetch(`${MAIN_BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  return checkApiError(res);
}

export const getUser = async () => {
  const res = await fetch(`${MAIN_BASE_URL}/users/me`, {
    headers: {
      authorization: getToken(),
    },
  });

  return checkApiError(res);
}
