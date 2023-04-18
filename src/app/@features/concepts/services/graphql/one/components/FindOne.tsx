import {IConcept, IConceptIdentifyingPartial} from '@junction/models/concept/models';
import {useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {ConceptContext} from '../context/context';
import {useDispatch} from 'react-redux';
import {ACTION_RECEIVE_ONE_CONCEPT} from '../../../redux/reducer';
import {gqlQueryNode_CONCEPT} from '@features/concepts/services/graphql/queries/one/query';

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