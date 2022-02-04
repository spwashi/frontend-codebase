import React, {useContext, useMemo} from 'react';
import {useFormItemController} from '../../hooks/useFormItemController';
import {FormContext} from '../../context/FormContext';


type Params =
    { formKey: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;


export function FileInput({formKey, name, ...rest}: Params) {
    const form       = useContext(FormContext);
    const [, update] = useFormItemController(form, formKey);
    const id         = useMemo(() => `input--${Math.random()}`.replace('.', ''), []);

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}