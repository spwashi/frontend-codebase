import {Feature} from '@services/features/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleEventsLastFetched, selectPossibleEventsList} from '../services/redux/selectors';
import {AllEventsQuery} from '../services/graphql/all/components/FindAll';
import {eventDisplayFeatureName, eventFeatureName} from '@features/events/features';

function EventDisplayFeature() {
  const lastFetched = useSelector(selectPossibleEventsLastFetched)
  const list        = useSelector(selectPossibleEventsList)
  const enabled     = lastFetched ? !!list.length : false;
  return <Feature name={eventDisplayFeatureName} enabled={enabled}/>;
}
export function EventFeatures() {
  return (
    <Feature name={eventFeatureName}>
      <EventDisplayFeature/>
    </Feature>
  )
}

EventFeatures.featureDeps =
  [
    AllEventsQuery,
  ]