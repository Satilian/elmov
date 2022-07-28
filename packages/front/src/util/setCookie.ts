export const setCookie = (key: string, value: any, maxAge = -1) => {
  document.cookie = `${key}=${value ? JSON.stringify(value) : ""};max-age=${maxAge}`;
};
