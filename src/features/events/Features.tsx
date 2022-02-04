import {Feature} from '../_util';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleEventsLastFetched, selectPossibleEventsList} from './redux/selectors';
import {AllEventsQuery} from './components/graphql/all/components/FindAll';

function EventDisplayFeature() {
    const lastFetched = useSelector(selectPossibleEventsLastFetched)
    const list        = useSelector(selectPossibleEventsList)
    return <Feature name="events.display" enabled={lastFetched ? !!list.length : false}/>;
}
export function EventFeatures() {
    return (
        <Feature name="events">
            <EventDisplayFeature/>
        </Feature>
    )
}

EventFeatures.dependencies =
    [
        AllEventsQuery,
    ]