import {useCallback, useContext, useEffect, useState} from 'react';
import {FormState} from '../../../context/types/state';
import {FormContext, ID_EMPTY} from '../../../context/context';
import {ACTION_UPDATE_INDEX} from '@widgets/form/state/reducer';

export function updateFormItem<T>(form: FormState, formKey: string, value: T, passive = false) {
  form.dispatch?.({
                    type:    ACTION_UPDATE_INDEX,
                    payload: {
                      index: formKey,
                      value: value,
                      passive,
                    },
                  })
}

type FormItemStateTuple<T = any> = [
  { localValue: T | null, value: T | null },
  (t: T) => void
];

export function useFormItem<T = any>(
  form: FormState,
  formKey: string | null,
  valueMapper: (v: any) => T = v => v,
  passive                    = false,
) {
  const [localValue, setLocalValue] = useState<T | null>(form?.data?.[formKey ?? ''] ?? null);

  const {id} = useContext(FormContext);

  useEffect(() => {
    const changed = typeof form?.changed?.[formKey ?? ''] === 'undefined';
    if (changed) {
      setLocalValue(null);
    }
  }, [form?.changed?.[formKey ?? '']]);


  const setValue =
          useCallback((input: T) => {
            const trueVal = valueMapper(input);
            formKey && updateFormItem(form, formKey, trueVal, passive);
            setLocalValue(input);
          }, [form, formKey, valueMapper, passive]);

  const value       = form?.data?.[`${formKey}`];
  const valueObject = {
    value:      value ?? (id === ID_EMPTY ? localValue : undefined),
    localValue: localValue ?? value,
  };

  return [valueObject, setValue] as FormItemStateTuple<T>;
}