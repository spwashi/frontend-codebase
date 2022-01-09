import React, {useContext, useEffect, useMemo} from 'react';
import {useFormItemController} from '../../hooks/useFormItemController';
import {FormContext} from '../../FormContext';

type InputParams =
    { formKey?: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Input({formKey, name, value, ...rest}: InputParams) {
    const form                 = useContext(FormContext);
    const [localValue, update] = useFormItemController(form, formKey ?? null);
    const {type = 'text'}      = rest;
    useEffect(() => { update(value); }, [value]);

    const id = useMemo(() => `input--${Math.random()}`.replace('.', ''), []);
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{rest.title ?? rest.placeholder}</label>
            <input
                {...rest}
                id={id}
                type={type}
                name={name}
                value={localValue ?? ''}
                onChange={e => update(e.target.value)}
            />
        </div>
    );
}

type TextareaParams =
    { formKey: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;


export function Textarea({formKey, name, ...rest}: TextareaParams) {
    const form                 = useContext(FormContext);
    const [localValue, update] = useFormItemController(form, formKey);
    const id                   = useMemo(() => `textarea--${Math.random()}`.replace('.', ''), []);
    return (
        <div className="input-wrapper">
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