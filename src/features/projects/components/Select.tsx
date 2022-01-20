import React, {useContext, useEffect, useState} from 'react';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {useProjectOptions} from '../hooks/useOptions';
import {useSelector} from 'react-redux';
import {selectProjectStateProject} from '../redux/selectors';
import {Input} from '../../../components/form/input/text/Input';
import {updateFormItem} from '../../../components/form/hooks/useFormItemController';
import {FormContext} from '../../../components/form/FormContext';

export function ProjectSelect({formKey, ignore}: { formKey?: string, ignore?: boolean }) {
    const options                   = useProjectOptions();
    const [_localIgnore, setIgnore] = useState(false);

    const doIgnore = ignore ?? _localIgnore;
    const project  = useSelector(selectProjectStateProject)
    const context  = useContext(FormContext);

    useEffect(() => { project && updateFormItem(context, formKey ?? '', project); }, [project]);

    if (project?.title && !doIgnore) {
        const onClick = () => {
            setIgnore(true)
            updateFormItem(context, formKey ?? '', undefined);
        };
        return (
            <>
                <Input value={project?.title} disabled/>
                <button onClick={onClick}>Clear</button>
            </>
        )
    }

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
