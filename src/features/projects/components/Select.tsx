import React, {useContext, useEffect, useState} from 'react';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {useProjectOptions} from '../hooks/useOptions';
import {useSelector} from 'react-redux';
import {selectProjectStateProject} from '../redux/selectors';
import {Input} from '../../../components/form/input/text/Input';
import {updateFormItem} from '../../../components/form/hooks/useFormItemController';
import {FormContext} from '../../../components/form/FormContext';

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
    const [ignore, setIgnore] = useState(false);
    const project             = useSelector(selectProjectStateProject)
    const context             = useContext(FormContext);

    useEffect(() => { project && updateFormItem(context, formKey ?? '', project); }, [project]);

    if (project?.title && !ignore) {
        return <>
            <Input value={project?.title} disabled/>
            <button onClick={e => {
                setIgnore(true)
                updateFormItem(context, formKey ?? '', undefined);
            }}>Clear
            </button>
        </>
    }

    return (
        <React.Fragment>
            <SelectInput
                valueMapper={(value) => valueMapper(value)}
                placeholder={'Project'}
                formKey={formKey ?? ''}
                options={options}
            />
        </React.Fragment>
    );
}
