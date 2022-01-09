import {DocumentNode, useApolloClient, useQuery} from '@apollo/client';
import {useChangeEffect} from '../../../util/hooks/useChangeEffect';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {ACTION_GRAPHQL, ACTION_NOGRAPHQL} from '../../../redux/reducer';

function useDispatchGraphqlError(error: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (/Failed to fetch/i.test(error?.message ?? '')) {
            dispatch({type: ACTION_NOGRAPHQL})
            return;
        }
        if (!error) {
            dispatch({type: ACTION_GRAPHQL})
        }
    }, [error]);
}

export function useFeatureQuery<T = any>(node: DocumentNode, projectStateKey: any): { data: T, error?: any } {
    const {data: data = {}, error} = useQuery(node);
    useDispatchGraphqlError(error);

    const client = useApolloClient()
    useChangeEffect(() => client.refetchQueries({include: [node]}), [projectStateKey, client]);
    return {data: data, error};
}
