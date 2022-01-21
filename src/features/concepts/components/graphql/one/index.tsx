import React from 'react';
import {IConceptIdentifyingPartial} from '../../../../../app/models/concept/models';
import {ConceptContextProvider} from './context/Provider';
import {ConceptContextDisplay} from './components/DisplayOne';
import {OneConceptQuery} from './components/FindOne';

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
            <ConceptContextDisplay/>
        </ConceptContextProvider>
    )
}