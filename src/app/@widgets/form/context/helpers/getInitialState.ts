import { IFormContextState } from "../types/state";

type IFormReducerParams<T = any> = { initialValue?: T; id?: string };
export function getInitialState<T = any>({
  initialValue,
  id,
}: IFormReducerParams<T>): IFormContextState<T> {
  return {
    id,
    key: 0,
    currentValue: {} as T,
    initialValue: initialValue,
    lastReset: undefined,
    changed: {},
    dispatch: (v: any) => {},
  };
}
