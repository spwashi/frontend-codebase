import React, { useMemo, useReducer } from "react";
import { formReducer } from "../../state/reducer";
import { getInitialState } from "../../context/helpers/getInitialState";
import { FormContext } from "../../context/context";
import { ButtonConfig, ButtonContainer } from "./buttons/ButtonContainer";
import { useFormOnChangeEffect } from "@widgets/form/internal/hooks/useFormOnChangeEffect";
import { useSetFormDefaultEffect } from "@widgets/form/internal/hooks/useSetFormDefaultEffect";
import { useSubmitHandlerCallback } from "@widgets/form/internal/hooks/useSubmitHandlerCallback";
import { IFormContextState } from "@widgets/form/context/types/state";

type IAppFormProps<T = any> = {
  children: any;
  defaultValue?: T;
  buttons?: (ButtonConfig | false)[];
  id?: string;
  onSubmit?: (data: T) => void;
  onChange?: (data: T) => void;
};

export default function AppForm({
  id,
  children,
  buttons,
  onSubmit,
  onChange,
  defaultValue,
}: IAppFormProps) {
  const [state, dispatch] = useReducer(
    formReducer,
    { defaultValue, id },
    getInitialState
  );
  useFormOnChangeEffect(state, onChange);
  useSetFormDefaultEffect(defaultValue, dispatch);
  const handleSubmit = useSubmitHandlerCallback(state, onSubmit);
  const formContextValue: IFormContextState = useMemo(
    () => ({ ...state, dispatch: dispatch }),
    [state.currentValue, dispatch]
  );
  return (
    <FormContext.Provider value={formContextValue}>
      <form onSubmit={handleSubmit} data-form-id={id}>
        {children}
        <ButtonContainer buttons={buttons} />
      </form>
    </FormContext.Provider>
  );
}
