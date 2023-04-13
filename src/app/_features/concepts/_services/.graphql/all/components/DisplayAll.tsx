import {useSelector} from 'react-redux';
import {selectConceptStateKey, selectPossibleConceptsList} from '../../../.redux/selectors';
import React from 'react';
import {ConceptDisplay} from '../../one/components/DisplayOne';

export function AllConceptsConceptDisplay() {
  const allConcepts = useSelector(selectPossibleConceptsList);
  const key         = useSelector(selectConceptStateKey);
  return <>
    {allConcepts.map(option => <ConceptDisplay key={option.payload.id} concept={option.payload}/>)}
  </>
}