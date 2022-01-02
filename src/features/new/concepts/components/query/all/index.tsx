import {gql, useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleConceptsLastFetched} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_CONCEPTS} from '../../../redux/reducer';
import {ConceptInput} from '../../../../../../../types/graphql/typeDefs';
import {ACTION_GRAPHQL, ACTION_NOGRAPHQL} from '../../../../../../redux/reducer';

function conceptToOption(concept: ConceptInput) {
    return {title: concept.title, value: concept.title, concept};
}

function fetchIsCurrent(lastFetched: number | null) {
    return (Date.now() - (lastFetched ?? 0)) < 1000;
}
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
export function AllConceptsQuery() {
  const ALL_CONCEPTS_QUERY          =
        gql`
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
        `;
    const {data: query = {}, error} = useQuery(ALL_CONCEPTS_QUERY);
    const dispatch                  = useDispatch();
    useDispatchGraphqlError(error);
    const lastFetched = useSelector(selectPossibleConceptsLastFetched)
    useEffect(() => {
        const options = query.allConcepts ? query.allConcepts.map(conceptToOption) : [];
        if (fetchIsCurrent(lastFetched) && !options.length) {
            return;
        }
        dispatch({type: ACTION_RECEIVE_ALL_CONCEPTS, payload: options})
    }, [query.allConcepts]);

    return !fetchIsCurrent(lastFetched) ? <>Loading...</> : null;
}