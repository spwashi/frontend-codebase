import React, {useContext, useMemo} from 'react';
import {useFormItemController} from '../../hooks/useFormItemController';
import {FormContext} from '../../FormContext';

type Option =
    string
    | { title: string, value: string };
type Params =
    { formKey?: string, options: Option[] }
    & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export function SelectInput({formKey, name, options, ...rest}: Params) {
    const form                 = useContext(FormContext);
    const [localValue, update] = useFormItemController(form, formKey ?? '');

    const id = useMemo(() => 'input--' + Date.now(), []);
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{rest.title ?? rest.placeholder}</label>
            <select {...rest} id={id} name={name} value={localValue ?? ''} onChange={e => update(e.target.value)}>
                <option value="">Select One...</option>
                {
                    options.map((option, index) => {
                        if (typeof option === 'string') return <option key={option}>{option}</option>;
                        return (
                            <option key={option.title + index} value={option.value}>{option.title}</option>
                        )
                    })
                }</select>
        </div>
    );
}