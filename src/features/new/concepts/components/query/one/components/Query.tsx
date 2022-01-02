import {IConcept, IConceptIdentifyingPartial} from '../../../../../../../models/concept/models/IConcept';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {ConceptContext} from '../context/context';

const CONCEPT_QUERY = gql`
    query Concept($title: String) {
        concept(title: $title) {
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
            author {
                username
                name
            }

        }
    }
`;

export function OneConceptQuery({title}: IConceptIdentifyingPartial) {
    const context      = useContext(ConceptContext) ?? ({} as any);
    const {setConcept} = context;

    const {data: query} = useQuery(CONCEPT_QUERY, {variables: {title}});
    const {concept}     = query ?? {};

    useEffect(() => {
        if (concept && setConcept) {
            setConcept(concept as IConcept);
        }
    }, [concept, setConcept]);

    return <></>
}