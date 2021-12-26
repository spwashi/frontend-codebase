import React, {useContext, useMemo} from 'react';
import {useFormItemController} from '../../hooks/useFormItemController';
import {FormContext} from '../../FormContext';

type InputParams =
    { formKey: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Input({formKey, name, ...rest}: InputParams) {
    const form                 = useContext(FormContext);
    const [localValue, update] = useFormItemController(form, formKey);
    const {type = 'text'}      = rest;
    const id                   = useMemo(() => 'input--' + Date.now(), []);
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
    const id                   = useMemo(() => 'input--' + Date.now(), []);
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