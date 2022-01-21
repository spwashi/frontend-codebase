import {FormState} from './types';

export function getInitialState<T = any>(d?: T): FormState<T> {
    return {
        key:          0,
        data:         {} as T,
        initialValue: d,
        changed:      {},
    };
}