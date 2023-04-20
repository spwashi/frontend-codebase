import { getInitialState } from "../context/helpers/getInitialState";

export const ACTION_UPDATE_INDEX = "update";
export const ACTION_RESET = "reset";
export const ACTION_SET_DEFAULT = "setDefault";

export function formReducer(
  formState = getInitialState(),
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case ACTION_RESET: {
      return {
        ...formState,
        key: formState.key + 1,
        lastReset: Date.now(),
        data: {
          ...formState.currentValue,
          ...Object.fromEntries(
            Object.entries(formState.currentValue ?? {}).map(([k]) => [
              k,
              formState.initialValue?.[k],
            ])
          ),
        },
        changed: {},
      };
    }
    case ACTION_SET_DEFAULT: {
      const initialValue = action.payload;
      return {
        ...formState,
        key: formState.key + 1,
        initialValue,
        data: {
          ...formState.currentValue,
          ...Object.fromEntries(
            Object.entries(initialValue ?? {}).filter(
              ([key]) => !formState.changed[key]
            )
          ),
        },
      };
    }
    case ACTION_UPDATE_INDEX: {
      const { index, value } = action.payload;
      if (value === formState.currentValue?.[index]) return formState;
      const passive = action.payload?.passive;
      let data: any;
      let changed: { [p: string]: boolean };
      if (value === formState.initialValue?.[index]) {
        changed = { ...formState.changed, [index]: false };
        data = formState.currentValue;
      } else {
        changed = { ...formState.changed, [index]: Date.now() };
        data = { ...formState.currentValue, [index]: value };
      }

      const nextKey = passive ? formState.key : formState.key + 1;
      return {
        ...formState,
        key: nextKey,
        changed: passive ? formState.changed : changed,
        data: data,
      };
    }
  }
  return formState;
}
