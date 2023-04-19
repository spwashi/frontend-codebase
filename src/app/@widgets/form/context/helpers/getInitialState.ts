import { IAppFormContextState } from "../types/state";

export function getInitialState<T = any>(
  d?: T,
  id?: string
): IAppFormContextState<T> {
  return {
    id,
    key: 0,
    data: {} as T,
    initialValue: d,
    lastReset: undefined,
    changed: {},
  };
}
