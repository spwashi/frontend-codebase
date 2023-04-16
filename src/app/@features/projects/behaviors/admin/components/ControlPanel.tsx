import React from 'react';
import {ProjectFeatures} from '../../../components/Features';
import {ProjectDisplayFormFeature} from '../../display/components/Form';
import {CreateProjectForm} from '../../create';
import {AllProjectsQuery} from '../../../services/graphql/all/all';
import {projectFeatureName} from '@features/projects/features';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';

export function ProjectsControlPanel() {
  return <>
    <AllProjectsQuery/>
    <ProjectFeatures/>
    <FeatureRequirement name={projectFeatureName} alternative={'Need Projects'}>
      <CreateProjectForm/>
      <ProjectDisplayFormFeature/>
    </FeatureRequirement>
  </>;
}