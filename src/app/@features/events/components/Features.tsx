import {Feature} from '@services/features/item/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleEventsLastFetched, selectPossibleEventsList} from '../services/redux/selectors';
import {EventListQuery} from '@features/events/services/graphql/list/components/ListQuery';
import {featureId__eventDisplay, featureId__events} from '../../../@/featureIds';

function EventDisplayFeature() {
  const lastFetched = useSelector(selectPossibleEventsLastFetched)
  const list        = useSelector(selectPossibleEventsList)
  const enabled     = lastFetched ? !!list.length : false;
  return <Feature name={featureId__eventDisplay} enabled={enabled}/>;
}
export function EventFeatures() {
  return (
    <Feature name={featureId__events}>
      <EventDisplayFeature/>
    </Feature>
  )
}

EventFeatures.featureDeps =
  [
    EventListQuery,
  ]