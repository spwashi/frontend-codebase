import {Feature} from '@services/features/item/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleConceptsLastFetched, selectPossibleConceptsList} from '../services/redux/selectors';
import {ConceptListQuery} from '../services/graphql/all/components/FindAll';
import {featureId__conceptDisplay, featureId__concepts} from '../../../@/featureIds';

function ConceptDisplayFeature() {
  const lastFetched = useSelector(selectPossibleConceptsLastFetched)
  const list        = useSelector(selectPossibleConceptsList)
  const enabled     = lastFetched ? !!list.length : false;
  return <Feature name={featureId__conceptDisplay} enabled={enabled}/>;
}
export function ConceptFeatures() {
  return (
    <Feature name={featureId__concepts}>
      <ConceptDisplayFeature/>
    </Feature>
  )
}

ConceptFeatures.featureDeps =
  [
    ConceptListQuery,
  ]