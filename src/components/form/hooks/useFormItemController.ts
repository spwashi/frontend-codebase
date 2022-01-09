import {useCallback, useState} from 'react';
import {ACTION_UPDATE_INDEX, FormContextState} from '../FormContext';

export function updateFormItem<T>(form: FormContextState, formKey: string, text: T) {
    form.dispatch({type: ACTION_UPDATE_INDEX, payload: {index: formKey, value: text}})
}
export function useFormItemController<T = any>(form: FormContextState, formKey: string|null, valueMapper: (v: any) => T = v => v) {
    const [localValue, setLocalValue] = useState<T | null>(null);
    const update                      =
              useCallback((input: T) => {
                  formKey && updateFormItem(form, formKey, valueMapper(input));
                  setLocalValue(input);
              }, [form, formKey, valueMapper]);
    return [localValue, update] as [T | null, (t: T) => void];
}