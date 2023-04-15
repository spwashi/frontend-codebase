import {useSelector} from 'react-redux';
import {Feature} from '@services/features/components/Feature';
import React from 'react';
import {selectPossibleTagsLastFetched, selectPossibleTagsList} from '../services/redux/selectors';
import {AllTagsQuery} from '../services/graphql/all';

function TagDisplayFeature() {
  const lastFetched = useSelector(selectPossibleTagsLastFetched)
  const list        = useSelector(selectPossibleTagsList)
  return (
    <Feature
      name={'tags.display'}
      enabled={lastFetched ? !!list.length : false}
    />
  );
}
export function TagFeatures() {
  return (
    <Feature name={'tags'}>
      <TagDisplayFeature/>
    </Feature>
  )
}

TagFeatures.featureDeps = [AllTagsQuery]