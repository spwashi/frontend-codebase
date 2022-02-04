import React, {useContext} from 'react';
import {FormContext} from '../../context/FormContext';
import {useFormItemController} from '../../hooks/useFormItemController';

type TextareaParams =
    { formKey?: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export function Textarea({formKey, name, ...rest}: TextareaParams) {
    const form                 = useContext(FormContext);
    const [localValue, update] = useFormItemController(form, formKey ?? null);
    return (
        <React.Fragment>
            <textarea
                {...rest}
                name={name}
                value={localValue ?? ''}
                onChange={e => update(e.target.value)}
            />
        </React.Fragment>
    );
}