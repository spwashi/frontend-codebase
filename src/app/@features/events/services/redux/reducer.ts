import { combineReducers } from "redux";
import { EventFeatureState, EventFeatureStateDataEvents } from "./types";

export const ACTION_RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const ACTION_RECEIVE_ONE_EVENT = "RECEIVE_ONE_EVENT";
export const ACTION_DELETE_ONE_EVENT = "DELETE_ONE_EVENT";

export const eventReducer = combineReducers<EventFeatureState>({
  enabled: () => true,
  features: (state = {}) => state,
  state: (state = { key: 0, renderKey: 0 }, action) => {
    switch (action.type) {
      case ACTION_DELETE_ONE_EVENT:
      case ACTION_RECEIVE_ONE_EVENT:
        return { ...state, renderKey: state.renderKey + 1 };
      case ACTION_RECEIVE_ALL_EVENTS:
        return { ...state, key: state.key + 1 };
    }
    return state;
  },
  data: combineReducers({
    events: (
      state: EventFeatureStateDataEvents = {
        lastFetched: null,
        list: [],
      },
      action
    ) => {
      switch (action.type) {
        case ACTION_DELETE_ONE_EVENT: {
          const id = action.payload.id;
          if (!id) return state;
          return {
            ...state,
            list: (state.list ?? []).filter((event) => event?.id !== id),
          };
        }
        case ACTION_RECEIVE_ONE_EVENT: {
          const id = action.payload.id;
          if (!id) return state;
          return {
            ...state,
            list: (state.list ?? []).map((event) =>
              event?.id !== id ? event : action.payload
            ),
          };
        }
        case ACTION_RECEIVE_ALL_EVENTS:
          return {
            ...state,
            list: action.payload,
            lastFetched: Date.now(),
          };
      }
      return state;
    },
  }),
});
