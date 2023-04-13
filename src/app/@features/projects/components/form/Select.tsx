import React, {useContext, useEffect} from 'react';
import {SelectInput} from '@widgets/form/features/fields/components/input/select/SelectInput';
import {useProjectOptions} from '../../hooks/useOptions';
import {useSelector} from 'react-redux';
import {selectProjectStateProject} from '../../services/redux/selectors';
import {updateFormItem} from '@widgets/form/features/fields/hooks/useFormItem';
import {FormContext} from '@widgets/form/context/context';
import {AllProjectsQuery} from '../../services/graphql/all/all';
import {Value} from '@widgets/form/features/fields/components/input/text/Input';

export function ProjectSelect({formKey, ignore}: { formKey?: string, ignore?: boolean }) {
  const options = useProjectOptions();
  const project = useSelector(selectProjectStateProject)
  const context = useContext(FormContext);

  useEffect(() => {
    !ignore && project && updateFormItem(context, formKey ?? '', project);
  }, [project]);

  const activeProject = project;
  const doUseActive   = !ignore && activeProject;
  if (doUseActive) {
    return <Value value={activeProject} formKey={formKey ?? ''}>{activeProject.title}</Value>
  }

  return (
    <React.Fragment>
      <AllProjectsQuery/>
      <SelectInput
        placeholder={'Project'}
        formKey={formKey ?? ''}
        options={options}
      />
    </React.Fragment>
  );
}
