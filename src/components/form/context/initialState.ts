import {FormState} from './types';

export function getInitialState<T = any>(d?: T, id?: string): FormState<T> {
    return {
        id,
        key:          0,
        data:         {} as T,
        initialValue: d,
        submit:       () => {},
        changed:      {},
    };
}