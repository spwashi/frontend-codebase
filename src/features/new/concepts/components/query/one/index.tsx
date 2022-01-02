import React from 'react';
import {IConceptIdentifyingPartial} from '../../../../../../models/concept/models/IConcept';
import {ConceptContextProvider} from './context/Provider';
import {ConceptDisplay} from './components/Display';
import {OneConceptQuery} from './components/Query';

/**
 *
 * @param title
 * @constructor
 */
export function Concept({title}: IConceptIdentifyingPartial) {
    if (!title) return null;
    return (
        <ConceptContextProvider>
            <OneConceptQuery title={title}/>
            <ConceptDisplay/>
        </ConceptContextProvider>
    )
}