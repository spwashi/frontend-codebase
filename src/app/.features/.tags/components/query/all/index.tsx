import {gql} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleTagsLastFetched, selectTagStateKey} from '../../../.services/.redux/selectors';
import {ACTION_RECEIVE_ALL_TAGS} from '../../../.services/.redux/reducer';
import {ACTION_GRAPHQL, ACTION_NOGRAPHQL} from '../../../../../.services/.redux/reducer';
import {useFeatureQuery} from '../../../../../.services/.features/hooks/useFeatureQuery';


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

export function AllTagsQuery() {
  const ALL_TAGS_QUERY =
          gql`
            query AllTags {
                allTags {
                    id
                    title
                    domain
                    user {
                        name
                        username
                    }
                }
            }
        `;
  const stateKey       = useSelector(selectTagStateKey);
  const {data, error}  = useFeatureQuery(ALL_TAGS_QUERY, {}, stateKey);
  const lastFetched    = useSelector(selectPossibleTagsLastFetched)
  const dispatch       = useDispatch();

  useDispatchGraphqlError(error);

  useEffect(() => {
    if (!data) return;
    const options = data.allTags ? data.allTags : [];
    dispatch({type: ACTION_RECEIVE_ALL_TAGS, payload: options})
  }, [data?.allTags]);

  return !lastFetched ? <>Loading...</> : null;
}