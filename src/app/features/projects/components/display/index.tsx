import React, {useState} from 'react';
import {Project} from '../query/one/components/Display';
import {StandardForm} from '../../../../components/form/Form';
import {SiteProjectController} from '../query/one';
import {useSelector} from 'react-redux';
import {selectProjectStateProject} from '../../redux/selectors';

export function ProjectDisplayForm() {
  const [state, setState] = useState<any | null>();
  const activeProject     = useSelector(selectProjectStateProject);
  const project           = state?.data?.project ?? activeProject;

  return (
    <section>
      <header>Project Display</header>
      <StandardForm onSubmit={setState} config={{
        formId: 'display-project-form',
        items:  [{name: 'project', title: 'Project', type: 'project'}],
      }}/>
      <SiteProjectController id={project?.id}/>
    </section>
  )
}