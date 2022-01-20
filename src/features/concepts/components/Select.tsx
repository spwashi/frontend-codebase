import React from 'react';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {useConceptOptions} from '../hooks/useOptions';

export function ConceptSelect({formKey, value}: { formKey?: string; value?: string }) {
    const options = useConceptOptions();

    return (
        <SelectInput
            placeholder={'Concept'}
            formKey={formKey ?? ''}
            options={options}
        />
    );
}
