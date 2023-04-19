import { getInitialState } from "../context/helpers/getInitialState";

export const ACTION_UPDATE_INDEX = "update";
export const ACTION_RESET = "reset";
export const ACTION_SET_DEFAULT = "setDefault";

export function formReducer(
  state = getInitialState(),
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case ACTION_RESET: {
      return {
        ...state,
        key: state.key + 1,
        lastReset: Date.now(),
        data: {
          ...state.data,
          ...Object.fromEntries(
            Object.entries(state.data ?? {}).map(([k]) => [
              k,
              state.initialValue?.[k],
            ])
          ),
        },
        changed: {},
      };
    }
    case ACTION_SET_DEFAULT: {
      const initialValue = action.payload;
      return {
        ...state,
        key: state.key + 1,
        initialValue,
        data: {
          ...state.data,
          ...Object.fromEntries(
            Object.entries(initialValue ?? {}).filter(
              ([key]) => !state.changed[key]
            )
          ),
        },
      };
    }
    case ACTION_UPDATE_INDEX: {
      const { index, value } = action.payload;
      if (value === state.data?.[index]) return state;
      const passive = action.payload?.passive;
      let data: any;
      let changed: { [p: string]: boolean };
      if (value === state.initialValue?.[index]) {
        changed = { ...state.changed, [index]: false };
        data = state.data;
      } else {
        changed = { ...state.changed, [index]: Date.now() };
        data = { ...state.data, [index]: value };
      }

      const nextKey = passive ? state.key : state.key + 1;
      return {
        ...state,
        key: nextKey,
        changed: passive ? state.changed : changed,
        data: data,
      };
    }
  }
  return state;
}
