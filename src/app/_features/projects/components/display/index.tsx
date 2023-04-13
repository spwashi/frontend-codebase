import React, {useState} from 'react';
import {Project} from '../../services/graphql/one/components/Display';
import {FormWidget} from '../../../../_widgets/form/FormWidget';
import {SiteProjectController} from '../../services/graphql/one';
import {useSelector} from 'react-redux';
import {selectProjectStateProject} from '../../services/redux/selectors';

export function ProjectDisplayForm() {
  const [state, setState] = useState<any | null>();
  const activeProject     = useSelector(selectProjectStateProject);
  const project           = state?.data?.project ?? activeProject;

  return (
    <section>
      <FormWidget onSubmit={setState} config={{
        title:  'Project Display Form',
        formId: 'display-project-form',
        items:  [{name: 'project', title: 'Project', type: 'project'}],
      }}/>
      <SiteProjectController id={project?.id}/>
    </section>
  )
}