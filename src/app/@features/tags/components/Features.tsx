import {useSelector} from 'react-redux';
import {Feature} from '@services/features/item/components/Feature';
import React from 'react';
import {selectPossibleTagsLastFetched, selectPossibleTagsList} from '../services/redux/selectors';
import {AllTagsQuery} from '../services/graphql/all';
import {feature_tagDisplay, feature_tags} from '../../../@/featureIds';

function TagDisplayFeature() {
  const lastFetched = useSelector(selectPossibleTagsLastFetched)
  const list        = useSelector(selectPossibleTagsList)
  const enabled     = lastFetched ? !!list.length : false;
  return <Feature name={feature_tagDisplay} enabled={enabled}/>;
}
export function TagFeatures() {
  return (
    <Feature name={feature_tags}>
      <TagDisplayFeature/>
    </Feature>
  )
}

TagFeatures.featureDeps = [AllTagsQuery]