import React from 'react';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {useTagOptions} from '../hooks/useOptions';

export function TagSelect({formKey}: { formKey?: string }) {
    const {options, optionValueMap} = useTagOptions();
    function valueMapper(value: string[]) {
        if (Array.isArray(value)) {
            return value.map((v: string) => {
                if (!optionValueMap.has(v)) return null;
                return optionValueMap.get(v) ?? {};
            })
        } else {
            return optionValueMap.get(value);
        }
    }

    return (
        <SelectInput
            valueMapper={(value) => {
                return valueMapper(value)
            }}
            multiple
            placeholder={'Tag'}
            formKey={formKey ?? ''}
            options={options}
        />
    );
}
