import {useCallback, useState} from 'react';
import {ACTION_UPDATE_INDEX} from '../context/reducer';
import {FormState} from '../context/types';

export function updateFormItem<T>(form: FormState, formKey: string, text: T, passive: boolean = false) {
    form.dispatch?.({
                        type:    ACTION_UPDATE_INDEX,
                        payload: {
                            index: formKey,
                            value: text,
                            passive,
                        },
                    })
}
export function useFormItemController<T = any>(
    form: FormState,
    formKey: string | null,
    valueMapper: (v: any) => T = v => v,
    passive: boolean           = false,
) {
    const [localValue, setLocalValue] = useState<T | null>(form?.data?.[formKey ?? ''] ?? null);
    const update                      =
              useCallback((input: T) => {
                  const trueVal = valueMapper(input);
                  formKey && updateFormItem(form, formKey, trueVal, passive);
                  setLocalValue(input);
              }, [form, formKey, valueMapper, passive]);
    return [localValue ?? form?.data?.[formKey ?? ''], update] as [T | null, (t: T) => void];
}