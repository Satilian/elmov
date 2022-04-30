export const getServerStorage = () => {
  const storage = {};

  return {
    setItem: (key: string, value: string) => {
      storage[key] = value;
    },
    getItem: (key: string) => storage[key],
    removeItem: (key: string) => delete storage[key],
  };
};
