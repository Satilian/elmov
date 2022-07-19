import NodeCache from "node-cache";

globalThis && !globalThis.cache && (globalThis.cache = new NodeCache());

export const backStorage = {
  setItem: async (key: string, value: Record<string, any>) =>
    await new Promise((resolve, reject) => {
      globalThis.cache.set(key, value) ? resolve(true) : reject();
    }),
  getItem: async <T = unknown>(key: string) =>
    await new Promise((resolve) => resolve(globalThis.cache.get<T>(key))),
  removeItem: async (key: string) =>
    await new Promise((resolve) => resolve(globalThis.cache.del(key))),
};
