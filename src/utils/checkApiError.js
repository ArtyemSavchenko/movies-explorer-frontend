export const checkApiError = async (res) => {
  if (!res.ok) {
    const err = await res.json();
    err.status = res.status;
    throw err;
  }

  return res.json();
};
