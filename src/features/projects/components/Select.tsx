import React from 'react';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {useProjectOptions} from '../hooks/useOptions';

export function ProjectSelect({formKey}: { formKey?: string }) {
    const {options, optionValueMap} = useProjectOptions();
    function valueMapper(value: string[]) {
        if (Array.isArray(value)) {
            return value.map((v: string) => {
                if (!optionValueMap.has(v)) return null;
                return optionValueMap.get(v) ?? null;
            })
        }
        return optionValueMap.get(value) ?? null;
    }
    return (
        <SelectInput
            valueMapper={(value) => valueMapper(value)}
            placeholder={'Project'}
            formKey={formKey ?? ''}
            options={options}
        />
    );
}
