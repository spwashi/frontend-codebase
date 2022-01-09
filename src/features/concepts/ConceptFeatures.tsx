import {Feature} from '../_util';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleConceptsLastFetched, selectPossibleConceptsList} from './redux/selectors';
import {AllConceptsQuery} from './components/graphql/components/all';

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

ConceptFeatures.dependencies =
    [
        AllConceptsQuery,
    ]