import React, {useContext} from 'react';
import {useFormItemController} from '../../hooks/useFormItemController';
import {FormContext} from '../../FormContext';

type Params =
    { formKey: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function FileInput({formKey, name, ...rest}: Params) {
    const form       = useContext(FormContext);
    const [, update] = useFormItemController(form, formKey);
    return (
        <>
            <input
                {...rest}
                type="file"
                name={name}
                onChange={e => {
                    const files = e.target.files;
                    console.log(files)
                    update(files);
                }}
            />
        </>
    );
}