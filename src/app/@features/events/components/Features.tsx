import {Feature} from '@services/features/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleEventsLastFetched, selectPossibleEventsList} from '../services/redux/selectors';
import {AllEventsQuery} from '../services/graphql/all/components/FindAll';

function EventDisplayFeature() {
  const lastFetched = useSelector(selectPossibleEventsLastFetched)
  const list        = useSelector(selectPossibleEventsList)
  return (
    <Feature
      name={'events.display'}
      enabled={lastFetched ? !!list.length : false}
    />
  );
}
export function EventFeatures() {
  return (
    <Feature name={'events'}>
      <EventDisplayFeature/>
    </Feature>
  )
}

EventFeatures.featureDeps =
  [
    AllEventsQuery,
  ]