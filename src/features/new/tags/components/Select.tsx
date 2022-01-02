import React from 'react';
import {SelectInput} from '../../../../components/form/input/select/SelectInput';
import {Tag} from '../../../../../types/graphql/typeDefs';
import {useTagOptions} from '../hooks/useOptions';

export function TagSelect({formKey}: { formKey?: string }) {
    const {options, optionValueMap} = useTagOptions();
    function valueMapper(value: string[]) {
        if (Array.isArray(value)) {
            return value.map((v: string) => {
                if (!optionValueMap.has(v)) return null;
                const {title} = optionValueMap.get(v) ?? {};
                if (!title) return null;
                return {title};
            })
        } else {
            let out = optionValueMap.get(value);
            if (typeof value === 'string' && !out) {
                return {title: value}
            }
            const {title} = out ?? {};
            return {title};
        }
    }

    return (
        <SelectInput
            valueMapper={(value) => {
                console.log(value);
                return valueMapper(value)
            }}
            placeholder={'Tag'}
            formKey={formKey ?? ''}
            options={options}
        />
    );
}
