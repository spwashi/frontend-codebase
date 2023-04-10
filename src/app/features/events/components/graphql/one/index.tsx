import React from 'react';
import {IEventIdentifyingPartial} from '../../../../../../.junction/models/event/models';
import {EventContextProvider} from './context/Provider';
import {EventContextDisplay} from './components/DisplayOne';
import {OneEventQuery} from './components/FindOne';

/**
 *
 * @param title
 * @constructor
 */
export function Event({id}: IEventIdentifyingPartial) {
    if (!id) return null;
    return (
        <EventContextProvider>
            <OneEventQuery id={id}/>
            <EventContextDisplay/>
        </EventContextProvider>
    )
}