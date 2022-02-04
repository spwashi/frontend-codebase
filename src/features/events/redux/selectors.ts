import {IEvent} from '../../../app/models/event/models';
import {EventOption} from './types';
import {RootState} from '../../../redux/rootState';

function eventToOption(event: IEvent): EventOption {
    return {
        title:   event.title,
        value:   event.title,
        payload: event,
    };
}

export const selectEventFeature              = (state: RootState) => state.features.event;
export const selectPossibleEventsList        = (state: RootState) => selectEventFeature(state).data.events.list?.map(eventToOption);
export const selectPossibleEventsLastFetched = (state: RootState) => selectEventFeature(state).data.events.lastFetched;
export const selectEventStateKey             = (state: RootState) => selectEventFeature(state).state.key;