import React, {useState} from 'react';
import {FormWidget} from '@widgets/form/FormWidget';
import {SiteProjectController} from '../../services/graphql/one';
import {useSelector} from 'react-redux';
import {selectProjectStateProject} from '../../services/redux/selectors';
import {projectDisplayFeatureName} from '../../features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {form__selectProject} from './config';

export function ProjectDisplayFormFeature() {
  const [state, setState] = useState<any | null>();
  const activeProject     = useSelector(selectProjectStateProject);
  const project           = state?.data?.project ?? activeProject;

  return (
    <FeatureRequirement name={projectDisplayFeatureName} alternative={'Need Project Display'}>
      <FormWidget config={form__selectProject} onSubmit={setState}/>
      <SiteProjectController id={project?.id}/>
    </FeatureRequirement>
  )
}