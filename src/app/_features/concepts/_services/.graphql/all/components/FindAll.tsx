import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectConceptStateKey, selectPossibleConceptsLastFetched} from '../../../.redux/selectors';
import {ACTION_RECEIVE_ALL_CONCEPTS} from '../../../.redux/reducer';
import {useFeatureQuery} from '../../../../../../_services/features/hooks/useFeatureQuery';
import {gql} from '@apollo/client';
import {IConcept_Complete} from '../../../../../../../.junction/models/concept/hybrids';

export function AllConceptsQuery() {
  const stateKey      = useSelector(selectConceptStateKey);
  const {data: query} =
          useFeatureQuery<{ allConcepts: IConcept_Complete[] }>(
            gql`
                query AllConcepts {
                    allConcepts {
                        id
                        title
                        contentType
                        src
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
  const lastFetched   = useSelector(selectPossibleConceptsLastFetched);
  const dispatch      = useDispatch();
  useEffect(() => {
    dispatch({
               type:    ACTION_RECEIVE_ALL_CONCEPTS,
               payload: query.allConcepts ? query.allConcepts : [],
             })
  }, [query?.allConcepts]);

  return !lastFetched ? <>Loading...</> : null;
}