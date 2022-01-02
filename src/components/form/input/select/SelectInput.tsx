import React, {useContext, useMemo} from 'react';
import {useFormItemController} from '../../hooks/useFormItemController';
import {FormContext} from '../../FormContext';

type Option<T extends any = any> =
    { title: string, value: T };
type Params<T extends any = any> =
    { formKey?: string, options: Option<T>[], valueMapper?: (v: any) => T }
    & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export function SelectInput({formKey, name, options, multiple, valueMapper, ...rest}: Params) {
    const form                 = useContext(FormContext);
    const [localValue, update] = useFormItemController(form, formKey ?? '', valueMapper);
    const id                   = useMemo(() => 'input--' + Math.random(), []);
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{rest.title ?? rest.placeholder}</label>
            <select {...rest} id={id} name={name} value={multiple ? localValue ?? [] : localValue ?? ''}
                    multiple={multiple} onChange={e => {
                if (!multiple) {
                    return update(e.target.value);
                }
                const options = e.target.options;
                const value   = [];
                let i         = 0;
                for (; i < options.length; i++) {
                    if (options[i].selected) {
                        value.push(options[i].value);
                    }
                }
                update(value);

            }}>
                <option value="">Select One...</option>
                {
                    options.map((option, index) => {
                        if (typeof option === 'string') return <option key={option}>{option}</option>;
                        return (
                            <option key={option.title + index}>{option.title}</option>
                        )
                    })
                }</select>
        </div>
    );
}