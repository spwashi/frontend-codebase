import {Feature} from '@services/features/item/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleEventsLastFetched, selectPossibleEventsList} from '../services/redux/selectors';
import {AllEventsQuery} from '../services/graphql/all/components/FindAll';
import {feature_eventDisplay, feature_events} from '../../../@/featureIds';

function EventDisplayFeature() {
  const lastFetched = useSelector(selectPossibleEventsLastFetched)
  const list        = useSelector(selectPossibleEventsList)
  const enabled     = lastFetched ? !!list.length : false;
  return <Feature name={feature_eventDisplay} enabled={enabled}/>;
}
export function EventFeatures() {
  return (
    <Feature name={feature_events}>
      <EventDisplayFeature/>
    </Feature>
  )
}

EventFeatures.featureDeps =
  [
    AllEventsQuery,
  ]