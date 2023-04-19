import React, { useMemo, useReducer } from "react";
import { formReducer } from "../../state/reducer";
import { getInitialState } from "../../context/helpers/getInitialState";
import { FormContext } from "../../context/context";
import { ButtonConfig, ButtonContainer } from "./buttons/ButtonContainer";
import { useFormOnChangeEffect } from "@widgets/form/internal/hooks/useFormOnChangeEffect";
import { useSetFormDefaultEffect } from "@widgets/form/internal/hooks/useSetFormDefaultEffect";
import { useSubmitHandlerCallback } from "@widgets/form/internal/hooks/useSubmitHandlerCallback";

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
  const [formState, dispatchOnFormContext] = useReducer(
    formReducer,
    getInitialState(defaultValue, id)
  );
  useFormOnChangeEffect(formState, onChange);
  useSetFormDefaultEffect(dispatchOnFormContext, defaultValue);
  const handleSubmit = useSubmitHandlerCallback(formState, onSubmit);
  const formContextValue = useMemo(() => ({ ...formState }), [formState.data]);

  return (
    <FormContext.Provider value={formContextValue}>
      <form onSubmit={handleSubmit} data-form-id={id}>
        {children}
        <ButtonContainer buttons={buttons} />
      </form>
    </FormContext.Provider>
  );
}
