import {useCallback, useState} from 'react';
import {ACTION_UPDATE_INDEX} from '../context/reducer';
import {FormState} from '../context/types';

export function updateFormItem<T>(form: FormState, formKey: string, text: T) {
    form.dispatch?.({type: ACTION_UPDATE_INDEX, payload: {index: formKey, value: text}})
}
export function useFormItemController<T = any>(
    form: FormState,
    formKey: string | null,
    valueMapper: (v: any) => T = v => v,
) {
    const [localValue, setLocalValue] = useState<T | null>(form.data[formKey ?? ''] ?? null);
    const update                      =
              useCallback((input: T) => {
                  const trueVal = valueMapper(input);
                  formKey && updateFormItem(form, formKey, trueVal);
                  setLocalValue(input);
              }, [form, formKey, valueMapper]);
    return [localValue ?? form.data[formKey ?? ''], update] as [T | null, (t: T) => void];
}