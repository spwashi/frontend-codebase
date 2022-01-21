import React, {useContext, useMemo} from 'react';
import {FormContext} from '../../context/FormContext';
import {useFormItemController} from '../../hooks/useFormItemController';
import css from '../styles/input.module.scss'
type TextareaParams =
    { formKey: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export function Textarea({formKey, name, ...rest}: TextareaParams) {
    const form                 = useContext(FormContext);
    const [localValue, update] = useFormItemController(form, formKey);
    const id                   = useMemo(() => `textarea--${Math.random()}`.replace('.', ''), []);
    return (
        <div className={css.inputWrapper}>
            <label htmlFor={id}>{rest.title ?? rest.placeholder}</label>
            <textarea
                {...rest}
                name={name}
                value={localValue ?? ''}
                onChange={e => update(e.target.value)}
            />
        </div>
    );
}