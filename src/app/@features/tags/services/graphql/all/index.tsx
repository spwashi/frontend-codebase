import {gql} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleTagsLastFetched, selectTagStateKey} from '../../redux/selectors';
import {ACTION_RECEIVE_ALL_TAGS} from '../../redux/reducer';
import {ACTION_GRAPHQL, ACTION_NOGRAPHQL} from '@services/redux/reducer';
import {useFeatureQuery} from '@services/features/hooks/useFeatureQuery';


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

export const gqlQueryNode_TAG_LIST = gql`
    query TagList {
        tagList {
            id
            title
            domain
        }
    }
`;

export function TagListQuery() {
  const stateKey      = useSelector(selectTagStateKey);
  const {data, error} = useFeatureQuery(gqlQueryNode_TAG_LIST, {}, stateKey);
  const lastFetched   = useSelector(selectPossibleTagsLastFetched)
  const dispatch      = useDispatch();

  useDispatchGraphqlError(error);

  useEffect(() => {
    if (!data) return;
    const options = data.tagList ? data.tagList : [];
    dispatch({type: ACTION_RECEIVE_ALL_TAGS, payload: options})
  }, [data?.tagList]);

  return !lastFetched ? <>Loading...</> : null;
}