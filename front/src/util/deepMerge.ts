export const deepMerge = <T extends Record<string, any>>(target: T, source: T): T => {
  const merged = {} as any;
  const keys = Array.from(new Set([...Object.keys(target), ...Object.keys(source)]));

  keys.forEach((key) => {
    if (Array.isArray(source[key])) merged[key] = [...source[key]];
    else if (!source[key] || !target[key]) merged[key] = source[key] || target[key];
    else if (target[key] instanceof Object && source[key] instanceof Object)
      merged[key] = deepMerge(target[key], source[key]);
    else merged[key] = source[key];
  });

  return merged;
};
