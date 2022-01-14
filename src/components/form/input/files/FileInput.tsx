import React, {useContext, useMemo} from 'react';
import {useFormItemController} from '../../hooks/useFormItemController';
import {FormContext} from '../../FormContext';
import css from '../styles/input.module.scss'


type Params =
    { formKey: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function FileInput({formKey, name, ...rest}: Params) {
    const form       = useContext(FormContext);
    const [, update] = useFormItemController(form, formKey);
    const id         = useMemo(() => `input--${Math.random()}`.replace('.', ''), []);

    return (
        <div className={css.inputWrapper}>
            <label htmlFor={id}>{rest.title ?? rest.placeholder}</label>
            <input
                {...rest}
                id={id}
                type="file"
                name={name}
                onChange={e => {
                    const files = e.target.files;
                    console.log(files)
                    update(files);
                }}
            />
        </div>
    );
}