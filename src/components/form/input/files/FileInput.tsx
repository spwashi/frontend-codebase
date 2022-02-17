import React, {useContext, useMemo} from 'react';
import {useFormItem} from '../../hooks/useFormItem';
import {formContext} from '../../context/FormContext';


type Params =
    { formKey: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;


export function FileInput({formKey, name, ...rest}: Params) {
    const form                   = useContext(formContext);
    const [{localValue}, update] = useFormItem(form, formKey);
    const id                     = useMemo(() => `input--${Math.random()}`.replace('.', ''), []);
    console.log(localValue)
    return (
        <React.Fragment>
            {
                ([...(localValue ?? []) as FileList]).map(file => {
                    switch (file.type.split('/')[0]) {
                        case 'image':
                            return <img style={{width: 300+'px'}} src={URL.createObjectURL(file)} alt=""/>;
                    }
                })
            }
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