import React from 'react';
import {IConceptIdentifyingPartial} from '@junction/models/concept/models';
import {ConceptContextProvider} from './context/Provider';
import {ConceptContextDisplay} from './components/DisplayOne';
import {OneConceptQuery} from './components/FindOne';

/**
 *
 * @param title
 * @constructor
 */
export function Concept({id}: IConceptIdentifyingPartial) {
  if (!id) return null;
  return (
    <ConceptContextProvider>
      <OneConceptQuery id={id}/>
      <ConceptContextDisplay/>
    </ConceptContextProvider>
  )
}
export {useDeleteConceptTagMutation} from '@features/concepts/services/graphql/one/mutations/untag';
export {gqlNode_CONCEPT_UNTAG} from '@features/concepts/services/graphql/one/mutations/untag';