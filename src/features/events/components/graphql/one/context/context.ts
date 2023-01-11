import {createContext, useContext} from 'react';
import {IEvent_Complete} from '../../../../../../app/junction/models/event/hybrids';
import {IEvent} from '../../../../../../app/junction/models/event/models';

type Event =
    IEvent
    | IEvent_Complete
    | null;

type IEventContext = {
    event: Event;
    setEvent: (event: Event) => void;
};
export function useActiveEvent(): Event {
    const {event = null} = useContext(EventContext) ?? {};

    return event ?? null;
}

export const EventContext = createContext<IEventContext | null>(null);