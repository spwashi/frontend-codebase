import {IConcept, IConceptIdentifyingPartial} from '../../../../../../app/models/concept/models';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {ConceptContext} from '../context/context';
import {useDispatch} from 'react-redux';
import {ACTION_RECEIVE_ONE_CONCEPT} from '../../../../redux/reducer';

const CONCEPT_QUERY = gql`
    query Concept($id: String!) {
        concept(id: $id) {
            id
            title
            src
            mimeType
            ConceptTag {
                tag {
                    title
                    domain
                }
            }
            user {
                username
                name
            }

        }
    }
`;

export function OneConceptQuery({id}: IConceptIdentifyingPartial) {
    const context      = useContext(ConceptContext) ?? ({} as any);
    const {setConcept} = context;

    const {data: query} = useQuery(CONCEPT_QUERY, {variables: {id} as IConceptIdentifyingPartial});

    const dispatch = useDispatch();

    const {concept} = query ?? {};

    useEffect(() => {
        if (!(concept && setConcept)) return;

        dispatch({type: ACTION_RECEIVE_ONE_CONCEPT, payload: concept})
        setConcept(concept as IConcept);
    }, [concept, setConcept]);

    return <></>
}