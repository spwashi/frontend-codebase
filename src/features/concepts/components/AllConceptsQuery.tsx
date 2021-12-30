import {gql, useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleConceptsLastFetched} from '../redux/selectors';
import {ACTION_RECEIVE_ALL_CONCEPTS} from '../redux/reducer';
import {ConceptInput} from '../../../../types/graphql/typeDefs';

function conceptToOption(concept: ConceptInput) {
    return {title: concept.title, value: concept.title};
}

function fetchIsCurrent(lastFetched: number | null) {
    return (Date.now() - (lastFetched ?? 0)) < 1000;
}
export function AllConceptsQuery() {
  const ALL_CONCEPTS_QUERY   =
        gql`
            query AllConcepts {
                allConcepts {
                    title
                    mimeType
                    src
                    published
                }
            }
        `;
    const {data: query = {}} = useQuery(ALL_CONCEPTS_QUERY);

    const dispatch    = useDispatch();
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