import {FetchResult, MutationFunctionOptions} from '@apollo/client';
import {useCallback} from 'react';

/**
 * Provides a callback that could be used to submit a form via ajax.
 *
 * @param send
 * @param selector
 */
export function useMutationFormSubmitCallback<T = any>(
    send: (options?: MutationFunctionOptions) => any,
    selector: (data: any) => T,
) {
    return useCallback(async ({data}: any) => {
        const variables  = selector(data);
        const parameters = {variables};
        await send(parameters)
    }, [send, selector]);
}