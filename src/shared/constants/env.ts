export const isServer = typeof window === 'undefined';

export const isClient = !isServer;

export const NODE_ENV = process.env.NODE_ENV;

export const PORT = process.env.PORT;

export const HOST_NAME = process.env.HOST_NAME;