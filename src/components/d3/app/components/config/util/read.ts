import {IVizInputConfig} from '../config/types';
import {isConfigWidget} from '../hooks';

export function readConfig<T extends any>(item?: IVizInputConfig<T> | T, fallback?: T, config = {}): T {
    if (!isConfigWidget(item)) {
        return (item ?? fallback) as T;
    }

    const state = item.state ?? item.defaultState;
    const value = typeof state === 'function' ? state(config) : state;
    if (typeof value === 'undefined' && typeof fallback === 'undefined') {
        console.log('error -- missing config')
        return undefined as unknown as T;
    }
    return (value ?? fallback) as T;
}