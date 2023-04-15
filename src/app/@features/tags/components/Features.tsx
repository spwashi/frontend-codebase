import {useSelector} from 'react-redux';
import {Feature} from '@services/features/components/Feature';
import React from 'react';
import {selectPossibleTagsLastFetched, selectPossibleTagsList} from '../services/redux/selectors';
import {AllTagsQuery} from '../services/graphql/all';
import {tagDisplayFeatureName, tagFeatureName} from '@features/tags/features';

function TagDisplayFeature() {
  const lastFetched = useSelector(selectPossibleTagsLastFetched)
  const list        = useSelector(selectPossibleTagsList)
  const enabled     = lastFetched ? !!list.length : false;
  return (
    <Feature name={tagDisplayFeatureName} enabled={enabled}/>
  );
}
export function TagFeatures() {
  return (
    <Feature name={tagFeatureName}>
      <TagDisplayFeature/>
    </Feature>
  )
}

TagFeatures.featureDeps = [AllTagsQuery]