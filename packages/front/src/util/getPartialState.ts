import { AppState } from "store";

type Options = {
  keys: string[];
  defaultKeys?: string[];
};

export const getPartialState = (state: AppState, { keys, defaultKeys = ["category"] }: Options) =>
  [...defaultKeys, ...keys].reduce((partial: Partial<AppState>, key) => {
    partial[key] = state[key];
    return partial;
  }, {});
