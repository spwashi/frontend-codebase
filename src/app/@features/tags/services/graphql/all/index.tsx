import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleTagsLastFetched, selectTagStateKey} from '../../redux/selectors';
import {ACTION_RECEIVE_ALL_TAGS} from '../../redux/reducer';
import {ACTION_GRAPHQL, ACTION_NOGRAPHQL} from '@services/redux/reducer';
import {useFeatureQuery} from '@services/features/hooks/useFeatureQuery';
import {gqlNode_TAG_FETCH_LIST} from '@features/tags/services/graphql/list/queries/fetchList';


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

export function TagListQuery() {
  const stateKey      = useSelector(selectTagStateKey);
  const {data, error} = useFeatureQuery(gqlNode_TAG_FETCH_LIST, {}, stateKey);
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