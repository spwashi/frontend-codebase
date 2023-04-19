import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { Log } from "@core/dev/components/Log";
import { ACTION_SET_DEFAULT, formReducer } from "../state/reducer";
import { getInitialState } from "../context/helpers/getInitialState";
import { FormState } from "../context/types/state";
import { FormContext } from "../context/context";
import { ButtonConfig, ButtonContainer } from "./buttons/ButtonContainer";

type ProviderProps<T = any> = {
  children: any;
  defaultValue?: T;
  getChangeKey?: (formState: FormState) => any;
  buttons?: (ButtonConfig | false)[];
  id?: string;
  onReset?: (d?: any) => void;
  onSubmit?: (data: T) => void;
  onChange?: (data: T) => void;
};
export default function InnerFormComponent({
  id,
  children,
  buttons,
  getChangeKey,
  onSubmit,
  onChange,
  defaultValue,
}: ProviderProps) {
  const [state, dispatch] = useReducer(
    formReducer,
    getInitialState(defaultValue, id)
  );
  const handleSubmit = useCallback(
    (event: any) => {
      event?.preventDefault && event.preventDefault();
      event?.stopPropagation && event.stopPropagation();
      onSubmit?.(state);
    },
    [onSubmit, state]
  );
  state.dispatch = dispatch;
  state.submit = handleSubmit;

  useEffect(() => {
    onChange?.(state);
  }, [state]);
  useEffect(() => {
    dispatch({ type: ACTION_SET_DEFAULT, payload: defaultValue });
  }, [defaultValue]);

  const value = useMemo(() => ({ ...state }), [state.data, dispatch]);
  const hasChanged = getChangeKey
    ? getChangeKey(state)
    : !!Object.entries(state.changed ?? {}).filter(([, v]) => v).length;
  return (
    <FormContext.Provider value={value}>
      <Log title={state.id} logReason="[form state]">
        {{ state, hasChanged }}
      </Log>
      <form onSubmit={state.submit} data-form-id={id}>
        {children}
        <ButtonContainer buttons={buttons} hasChanged={hasChanged} />
      </form>
    </FormContext.Provider>
  );
}
