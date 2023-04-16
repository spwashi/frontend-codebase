import {Feature} from '@services/features/item/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleConceptsLastFetched, selectPossibleConceptsList} from '../services/redux/selectors';
import {AllConceptsQuery} from '../services/graphql/all/components/FindAll';
import {feature_conceptDisplay, feature_concepts} from '../../../@/featureIds';

function ConceptDisplayFeature() {
  const lastFetched = useSelector(selectPossibleConceptsLastFetched)
  const list        = useSelector(selectPossibleConceptsList)
  const enabled     = lastFetched ? !!list.length : false;
  return <Feature name={feature_conceptDisplay} enabled={enabled}/>;
}
export function ConceptFeatures() {
  return (
    <Feature name={feature_concepts}>
      <ConceptDisplayFeature/>
    </Feature>
  )
}

ConceptFeatures.featureDeps =
  [
    AllConceptsQuery,
  ]