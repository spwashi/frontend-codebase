import {Feature} from '../util/features';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleConceptsLastFetched, selectPossibleConceptsList} from '../features/concepts/redux/selectors';

function ConceptDisplayFeature() {
    const lastFetched = useSelector(selectPossibleConceptsLastFetched)
    const list        = useSelector(selectPossibleConceptsList)
    return <Feature name="concepts.display" enabled={lastFetched ? !!list.length : false}/>;
}
export function ConceptFeatures() {
    return (
        <Feature name="concepts">
            <ConceptDisplayFeature/>
        </Feature>
    )
}