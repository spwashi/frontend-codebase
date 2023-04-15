import {Feature} from '@services/features/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleConceptsLastFetched, selectPossibleConceptsList} from '../services/redux/selectors';
import {AllConceptsQuery} from '../services/graphql/all/components/FindAll';
import {conceptDisplayFeatureName, conceptFeatureName} from '@features/concepts/features';

function ConceptDisplayFeature() {
  const lastFetched = useSelector(selectPossibleConceptsLastFetched)
  const list        = useSelector(selectPossibleConceptsList)
  const enabled     = lastFetched ? !!list.length : false;
  return (
    <Feature name={conceptDisplayFeatureName} enabled={enabled}/>
  );
}
export function ConceptFeatures() {
  return (
    <Feature name={conceptFeatureName}>
      <ConceptDisplayFeature/>
    </Feature>
  )
}

ConceptFeatures.featureDeps =
  [
    AllConceptsQuery,
  ]