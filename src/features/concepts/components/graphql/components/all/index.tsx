import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleConceptsLastFetched} from '../../../../redux/selectors';
import {ACTION_RECEIVE_ALL_CONCEPTS} from '../../../../redux/reducer';
import {useFeatureQuery} from '../../../../../_util/hooks/useFeatureQuery';
import {gql} from '@apollo/client';
import {IConcept_Complete} from '../../../../../../models/concept/hybrids';

function fetchIsCurrent(lastFetched: number | null) {
    return (Date.now() - (lastFetched ?? 0)) < 1000;
}

export function AllConceptsQuery() {
  const {data: query} = useFeatureQuery<{ allConcepts: IConcept_Complete[] }>(gql`
      query AllConcepts {
          allConcepts {
              title
              mimeType
              src
              published
              author {
                  name
                  username
              }
          }
      }
  `, 0);
    const lastFetched = useSelector(selectPossibleConceptsLastFetched);
    const dispatch    = useDispatch();
    useEffect(() => {
        const options = query.allConcepts ? query.allConcepts : [];
        dispatch({type: ACTION_RECEIVE_ALL_CONCEPTS, payload: options})
    }, [query.allConcepts]);

    return !fetchIsCurrent(lastFetched) ? <>Loading...</> : null;
}