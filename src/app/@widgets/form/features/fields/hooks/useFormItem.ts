import { useCallback, useContext, useEffect, useState } from "react";
import { ACTION_UPDATE_INDEX } from "@widgets/form/state/reducer";
import { FormContext, ID_EMPTY } from "../../../context/context";

export function updateFormItem<T>(
  formKey: string,
  value: T,
  dispatch: (action: any) => void,
  passive = false
) {
  dispatch({
    type: ACTION_UPDATE_INDEX,
    payload: {
      index: formKey,
      value: value,
      passive,
    },
  });
}

type FormItemStateTuple<T = any> = [
  { localValue: T | null; value: T | null },
  (t: T) => void
];

export function useFormItem<T = any>(
  formKey?: string | null | undefined,
  valueMapper: (v: any) => T = (v) => v,
  passive = false
) {
  const form = useContext(FormContext);
  const value = form?.currentValue?.[`${formKey}`];
  const itemHasChangedState = form?.changed?.[formKey ?? ""];

  const { id, dispatch } = form;

  const [localValue, setLocalValue] = useState<T | null>(value);

  // If the form item hasn't changed, the local value is null
  useEffect(() => {
    const changed = typeof itemHasChangedState === "undefined";
    if (changed) {
      setLocalValue(null);
    }
  }, [itemHasChangedState]);

  const setValue = useCallback(
    (input: T) => {
      const trueVal = valueMapper(input);
      formKey && updateFormItem(formKey, trueVal, dispatch, passive);
      setLocalValue(input);
    },
    [formKey, valueMapper, passive, dispatch]
  );

  const valueObject = {
    value: value ?? (id === ID_EMPTY ? localValue : undefined),
    localValue: localValue ?? value,
  };

  return [valueObject, setValue] as FormItemStateTuple<T>;
}
