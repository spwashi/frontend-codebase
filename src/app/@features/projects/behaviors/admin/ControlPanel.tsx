import {FeatureRequirement} from '@services/features/components/Feature';
import React from 'react';
import {ProjectFeatures} from '../../components/Features';
import {ProjectDisplayForm} from '../../components/display';
import {CreateProjectForm} from '../create';
import {AllProjectsQuery} from '../../services/graphql/all/all';

export function ProjectsControlPanel() {
  return <>
    <AllProjectsQuery/>
    <ProjectFeatures/>
    <FeatureRequirement name="projects" alternative={'Need Projects'}>
      <section>
        <CreateProjectForm/>
        <FeatureRequirement name="projects.display" alternative={'Need Project Display'}>
          <ProjectDisplayForm/>
        </FeatureRequirement>
      </section>
    </FeatureRequirement>
  </>;
}