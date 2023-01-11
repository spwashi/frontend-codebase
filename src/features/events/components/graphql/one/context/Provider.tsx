import React, {useMemo, useState} from 'react';
import {EventContext} from './context';
import {IEvent} from '../../../../../../app/junction/models/event/models';

export function EventContextProvider({children, event: _event}: { children?: any, event?: IEvent }) {
    const [event, setEvent] = useState<IEvent | null>(_event ?? null);
    const context               =
              useMemo(() => ({
                  event: event ?? null,
                  setEvent,
              }), [event]);

    return (
        <EventContext.Provider value={context}>
            {children}
        </EventContext.Provider>
    )
}