import {FeatureRequirement} from '@services/features/components/Feature';
import React from 'react';
import {ProjectFeatures} from '../../components/Features';
import {ProjectDisplayForm} from '../../components/display';
import {CreateProjectForm} from '../create';
import {AllProjectsQuery} from '../../services/graphql/all/all';
import {projectDisplayFeatureName, projectFeatureName} from '@features/projects/features';

export function ProjectsControlPanel() {
  return <>
    <AllProjectsQuery/>
    <ProjectFeatures/>
    <FeatureRequirement name={projectFeatureName} alternative={'Need Projects'}>
      <section>
        <CreateProjectForm/>
        <FeatureRequirement name={projectDisplayFeatureName} alternative={'Need Project Display'}>
          <ProjectDisplayForm/>
        </FeatureRequirement>
      </section>
    </FeatureRequirement>
  </>;
}