import { IEvent } from "@junction/models/event/models";
import { EventOption } from "./types";
import { IRootAppState } from "@core/types/IRootAppState";

function eventToOption(event: IEvent): EventOption {
  return {
    title: event.title,
    value: event.title,
    payload: event,
  };
}

export const selectEventFeature = (state: IRootAppState) =>
  state.features.event;
export const selectPossibleEventsList = (state: IRootAppState) =>
  selectEventFeature(state).data.events.list?.map(eventToOption);
export const selectPossibleEventsLastFetched = (state: IRootAppState) =>
  selectEventFeature(state).data.events.lastFetched;
export const selectEventStateKey = (state: IRootAppState) =>
  selectEventFeature(state).state.key;
