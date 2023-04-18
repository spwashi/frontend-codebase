import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectEventStateKey, selectPossibleEventsLastFetched} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_EVENTS} from '../../../redux/reducer';
import {useFeatureQuery} from '@services/features/hooks/useFeatureQuery';
import {gql} from '@apollo/client';
import {IEvent_Complete} from '@junction/models/event/hybrids';

export const gqlQueryNode_EVENT_LIST = gql`
    query EventList {
        eventList {
            id
            title
            start
            startDate
            end
            endDate
            description
            published
        }
    }
`;

export function EventListQuery() {
  const stateKey      = useSelector(selectEventStateKey);
  const {data: query} = useFeatureQuery<{ eventList: IEvent_Complete[] }>(gqlQueryNode_EVENT_LIST, {}, stateKey);
  const lastFetched   = useSelector(selectPossibleEventsLastFetched);
  const dispatch      = useDispatch();
  useEffect(() => {
    if (!query) console.error('no query')
    dispatch({
               type:    ACTION_RECEIVE_ALL_EVENTS,
               payload: query.eventList ? query.eventList : [],
             })
  }, [query?.eventList]);

  return !lastFetched ? <>Loading...</> : null;
}