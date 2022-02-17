import React, {useContext} from 'react';
import {formContext} from '../../context/FormContext';
import {useFormItem} from '../../hooks/useFormItem';

type TextareaParams =
    { formKey?: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export function Textarea({formKey, name, ...rest}: TextareaParams) {
    const form              = useContext(formContext);
    const [{value}, update] = useFormItem(form, formKey ?? null);
    return (
        <React.Fragment>
            <textarea
                {...rest}
                name={name}
                value={value ?? ''}
                onChange={e => update(e.target.value)}
            />
        </React.Fragment>
    );
}