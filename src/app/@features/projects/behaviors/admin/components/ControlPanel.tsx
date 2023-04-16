import React from 'react';
import {ProjectFeatures} from '../../../components/Features';
import {ProjectDisplayFormFeature} from '../../display/components/Form';
import {CreateProjectForm} from '../../create';
import {ProjectListQuery} from '../../../services/graphql/all/all';
import {FeatureRequirement} from '@services/features/list/components/FeatureRequirement';
import {featureId__projects} from '../../../../../@/featureIds';

export function ProjectsControlPanel() {
  return <>
    <ProjectListQuery/>
    <ProjectFeatures/>
    <FeatureRequirement name={featureId__projects} alternative={'Need Projects'}>
      <CreateProjectForm/>
      <ProjectDisplayFormFeature/>
    </FeatureRequirement>
  </>;
}