import React from 'react';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {useTagOptions} from '../hooks/useOptions';

export function TagSelect({formKey}: { formKey?: string }) {
    const options = useTagOptions();

    return (
        <SelectInput
            multiple
            placeholder={'Tag'}
            formKey={formKey ?? ''}
            options={options}
        />
    );
}
