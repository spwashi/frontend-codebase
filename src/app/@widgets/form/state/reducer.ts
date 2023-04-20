import { getInitialState } from "../context/helpers/getInitialState";
import { IFormContextState } from "@widgets/form/context/types/state";

export const ACTION_UPDATE_INDEX = "update";
export const ACTION_RESET = "reset";
export const ACTION_SET_DEFAULT = "setDefault";

export function formReducer(
  formState: IFormContextState,
  action: { type: string; payload: any }
): IFormContextState {
  switch (action.type) {
    case ACTION_RESET: {
      return {
        ...formState,
        key: formState.key + 1,
        lastReset: Date.now(),
        currentValue: {
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
        currentValue: {
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
      let currentValue: any;
      let changed: { [p: string]: boolean };
      if (value === formState.initialValue?.[index]) {
        changed = { ...formState.changed, [index]: false };
        currentValue = formState.currentValue;
      } else {
        changed = { ...formState.changed, [index]: Date.now() };
        currentValue = { ...formState.currentValue, [index]: value };
      }

      const nextKey = passive ? formState.key : formState.key + 1;
      return {
        ...formState,
        key: nextKey,
        changed: passive ? formState.changed : changed,
        currentValue: currentValue,
      };
    }
  }
  return formState;
}
