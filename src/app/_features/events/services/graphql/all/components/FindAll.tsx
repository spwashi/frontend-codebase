import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectEventStateKey, selectPossibleEventsLastFetched} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_EVENTS} from '../../../redux/reducer';
import {useFeatureQuery} from '../../../../../../_services/features/hooks/useFeatureQuery';
import {gql} from '@apollo/client';
import {IEvent_Complete} from '../../../../../../../.junction/models/event/hybrids';

export function AllEventsQuery() {
  const stateKey      = useSelector(selectEventStateKey);
  const {data: query} =
          useFeatureQuery<{ allEvents: IEvent_Complete[] }>(
            gql`
              query AllEvents {
                  allEvents {
                      id
                      title
                      start
                      startDate
                      end
                      endDate
                      description
                      published
                      user {
                          name
                          username
                      }
                  }
              }
          `,
            {},
            stateKey,
          );
  const lastFetched   = useSelector(selectPossibleEventsLastFetched);
  const dispatch      = useDispatch();
  useEffect(() => {
    if (!query) console.error('no query')
    dispatch({
               type:    ACTION_RECEIVE_ALL_EVENTS,
               payload: query.allEvents ? query.allEvents : [],
             })
  }, [query?.allEvents]);

  return !lastFetched ? <>Loading...</> : null;
}