import NodeCache from "node-cache";

globalThis && !globalThis.cache && (globalThis.cache = new NodeCache());

export const backStorage = {
  setItem: (key: string, value: Record<string, any>) => globalThis.cache.set(key, value),
  getItem: <T = unknown>(key: string) => globalThis.cache.get<T>(key),
  removeItem: (key: string) => globalThis.cache.del(key),
};
