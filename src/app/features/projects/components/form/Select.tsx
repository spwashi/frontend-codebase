import React, {useContext, useEffect} from 'react';
import {SelectInput} from '../../../../components/form/input/select/SelectInput';
import {useProjectOptions} from '../../hooks/useOptions';
import {useSelector} from 'react-redux';
import {selectProjectStateProject} from '../../redux/selectors';
import {updateFormItem} from '../../../../components/form/hooks/useFormItem';
import {FormContext} from '../../../../components/form/context/FormContext';

export function ProjectSelect({formKey, ignore}: { formKey?: string, ignore?: boolean }) {
    const options = useProjectOptions();

    const project = useSelector(selectProjectStateProject)
    const context = useContext(FormContext);

    useEffect(() => { project && updateFormItem(context, formKey ?? '', project); }, [project]);

    return (
        <React.Fragment>
            <SelectInput
                placeholder={'Project'}
                formKey={formKey ?? ''}
                options={options}
            />
        </React.Fragment>
    );
}
