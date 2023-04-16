import React from 'react';
import {useSelector} from 'react-redux';
import {Feature} from '@services/features/item/components/Feature';
import {selectPossibleProjectsLastFetched, selectPossibleProjectsList} from '../services/redux/selectors';
import {AllProjectsQuery} from '../services/graphql/all/all';
import {feature_assets, feature_projectCreate, feature_projectDisplay, feature_projects} from '../../../@/featureIds';

function ProjectDisplayFeature() {
  const lastFetched = useSelector(selectPossibleProjectsLastFetched)
  const list        = useSelector(selectPossibleProjectsList)
  const enabled     = lastFetched ? !!list.length : false;
  return <Feature name={feature_projectDisplay} enabled={enabled}/>;
}

function ProjectCreateFeature() {
  return <Feature name={feature_projectCreate} enabled={true}/>;
}

export function ProjectFeatures() {
  return (
    <Feature name={feature_projects}>
      <ProjectDisplayFeature/>
      <ProjectCreateFeature/>
      <Feature name={feature_assets}/>
    </Feature>
  );
}

ProjectFeatures.featureDeps = [
  AllProjectsQuery,
]