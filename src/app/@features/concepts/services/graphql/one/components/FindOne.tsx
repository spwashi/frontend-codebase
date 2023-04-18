import {IConcept, IConceptIdentifyingPartial} from '@junction/models/concept/models';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {ConceptContext} from '../context/context';
import {useDispatch} from 'react-redux';
import {ACTION_RECEIVE_ONE_CONCEPT} from '../../../redux/reducer';

export const gqlQueryNode_CONCEPT = gql`
    query Concept($id: String!) {
        concept(id: $id) {
            id
            title
            src
            contentType
            conceptTags {
                tag {
                    title
                    domain
                }
            }
        }
    }
`;

export function OneConceptQuery({id}: IConceptIdentifyingPartial) {
  const context       = useContext(ConceptContext) ?? ({} as any);
  const {setConcept}  = context;
  const {data: query} = useQuery(gqlQueryNode_CONCEPT, {variables: {id} as IConceptIdentifyingPartial});
  const dispatch      = useDispatch();
  const {concept}     = query ?? {};

  useEffect(() => {
    if (!(concept && setConcept)) return;
    dispatch({type: ACTION_RECEIVE_ONE_CONCEPT, payload: concept})
    setConcept(concept as IConcept);
  }, [concept, setConcept]);

  return <></>
}