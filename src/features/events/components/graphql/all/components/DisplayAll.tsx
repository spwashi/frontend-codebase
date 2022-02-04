import {useSelector} from 'react-redux';
import {selectEventStateKey, selectPossibleEventsList} from '../../../../redux/selectors';
import React from 'react';
import {EventDisplay} from '../../one/components/DisplayOne';
import {ErrorBoundary} from '../../../../../../components/error';
import {Log} from '../../../../../../components/Log';

export function AllEventsEventDisplay() {
    const allEvents = useSelector(selectPossibleEventsList);
    const key         = useSelector(selectEventStateKey);
    return <>
        {allEvents.map(option => <EventDisplay key={option.payload.id} event={option.payload}/>)}
    </>
}