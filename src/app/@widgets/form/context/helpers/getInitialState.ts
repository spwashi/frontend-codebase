import { IFormContextState } from "../types/state";

export function getInitialState<T = any>(
  d?: T,
  id?: string
): IFormContextState<T> {
  return {
    id,
    key: 0,
    currentValue: {} as T,
    initialValue: d,
    lastReset: undefined,
    changed: {},
    dispatch: (v: any) => {},
  };
}
