import {Feature} from '../../../_services/features/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleConceptsLastFetched, selectPossibleConceptsList} from '../services/redux/selectors';
import {AllConceptsQuery} from '../services/graphql/all/components/FindAll';

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

ConceptFeatures.featureDeps =
  [
    AllConceptsQuery,
  ]