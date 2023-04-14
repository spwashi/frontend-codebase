import {FormState} from '../types/state';

export function getInitialState<T = any>(d?: T, id?: string): FormState<T> {
  return {
    id,
    key:          0,
    data:         {} as T,
    initialValue: d,
    lastReset:    undefined,
    submit:       () => {
      console.log('submitted')
    },
    changed:      {},
  };
}