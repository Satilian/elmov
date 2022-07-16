import { AppState } from "store";

export const getPartialState = (keys: string[], state: AppState) =>
  keys.reduce((partial: Partial<AppState>, key) => {
    partial[key] = state[key];
    return partial;
  }, {});
