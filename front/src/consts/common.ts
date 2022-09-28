export const imagePath = "/images/product/";
export const isDev = process.env.NODE_ENV !== "production";
export const isServer = () => typeof window === "undefined";
