import { IRootAppState } from "@core/types/IRootAppState";
import { EventOption } from "./types";
import { Event } from "../../../../../__generated__/graphql";

function eventToOption(event: Event): EventOption {
  return {
    title: event.title,
    value: event.id,
    payload: event.id,
  };
}

export const selectEventFeature = (state: IRootAppState) =>
  state.features.event;
export const selectEventList = (state: IRootAppState) =>
  selectEventFeature(state).data.events.list;
export const selectPossibleEventOptions = (state: IRootAppState) =>
  selectEventList(state)?.map(eventToOption);
export const selectPossibleEventsLastFetched = (state: IRootAppState) =>
  selectEventFeature(state).data.events.lastFetched;
export const selectEventStateKey = (state: IRootAppState) =>
  selectEventFeature(state).state.key;
