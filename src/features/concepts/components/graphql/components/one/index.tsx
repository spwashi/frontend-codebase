import React from 'react';
import {IConceptIdentifyingPartial} from '../../../../../../models/concept/models';
import {ConceptContextProvider} from './context/Provider';
import {OneConceptDisplay} from './components/DisplayOne';
import {OneConceptQuery} from './components/QueryOne';

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
            <OneConceptDisplay/>
        </ConceptContextProvider>
    )
}