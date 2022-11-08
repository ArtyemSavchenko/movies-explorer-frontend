const generateId = () => {
  const date = new Date();
  return date.getSeconds() + date.getMilliseconds() + Math.random();
};

export { generateId };
