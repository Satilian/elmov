export const deepMerge = (target: any, source: any): any => {
  const merged: any = {};

  Object.keys(source).forEach((key) => {
    if (Array.isArray(source[key])) merged[key] = source[key].slice();
    else if (!source[key] || !target[key]) merged[key] = source[key] || target[key];
    else if (target[key] instanceof Object && source[key] instanceof Object)
      merged[key] = deepMerge(target[key], source[key]);
    else merged[key] = source[key];
  });

  return merged;
};
