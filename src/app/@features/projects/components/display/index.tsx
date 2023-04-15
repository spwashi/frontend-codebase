import React, {useState} from 'react';
import {FormWidget} from '@widgets/form/FormWidget';
import {SiteProjectController} from '../../services/graphql/one';
import {useSelector} from 'react-redux';
import {selectProjectStateProject} from '../../services/redux/selectors';
import {projectDisplayFeatureName} from '@features/projects/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';

export function ProjectDisplayFormFeature() {
  const [state, setState] = useState<any | null>();
  const activeProject     = useSelector(selectProjectStateProject);
  const project           = state?.data?.project ?? activeProject;

  return (
    <FeatureRequirement name={projectDisplayFeatureName} alternative={'Need Project Display'}>
      <section>
        <FormWidget onSubmit={setState} config={{
          title:  'Project Display Form',
          formId: 'display-project-form',
          items:  [{name: 'project', title: 'Project', type: 'project'}],
        }}/>
        <SiteProjectController id={project?.id}/>
      </section>
    </FeatureRequirement>
  )
}