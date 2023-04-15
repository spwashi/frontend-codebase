import React from 'react';
import {useSelector} from 'react-redux';
import {Feature} from '@services/features/components/Feature';
import {selectPossibleProjectsLastFetched, selectPossibleProjectsList} from '../services/redux/selectors';
import {AllProjectsQuery} from '../services/graphql/all/all';
import {assetFeatureName} from '@features/assets/features';
import {projectCreateFeatureName, projectDisplayFeatureName, projectFeatureName} from '@features/projects/features';

function ProjectDisplayFeature() {
  const lastFetched = useSelector(selectPossibleProjectsLastFetched)
  const list        = useSelector(selectPossibleProjectsList)
  const enabled     = lastFetched ? !!list.length : false;
  return <Feature name={projectDisplayFeatureName} enabled={enabled}/>;
}

function ProjectCreateFeature() {
  return <Feature name={projectCreateFeatureName} enabled={true}/>;
}

export function ProjectFeatures() {
  return (
    <Feature name={projectFeatureName}>
      <ProjectDisplayFeature/>
      <ProjectCreateFeature/>
      <Feature name={assetFeatureName}/>
    </Feature>
  );
}

ProjectFeatures.featureDeps = [
  AllProjectsQuery,
]