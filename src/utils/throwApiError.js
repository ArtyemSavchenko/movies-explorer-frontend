export const checkApiError = async (res) => {
  if (!res.ok) {
    throw res;
  }

  return res.json();
};
