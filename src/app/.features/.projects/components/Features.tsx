import {useSelector} from 'react-redux';
import {Feature} from '../../../.services/.features/components/Feature';
import React from 'react';
import {selectPossibleProjectsLastFetched, selectPossibleProjectsList} from '../.services/.redux/selectors';
import {AllProjectsQuery} from './query/all/all';


function ProjectDisplayFeature() {
  const lastFetched = useSelector(selectPossibleProjectsLastFetched)
  const list        = useSelector(selectPossibleProjectsList)
  return <Feature name="projects.display" enabled={lastFetched ? !!list.length : false}/>;
}

function ProjectCreateFeature() {
  return <Feature name="projects.create" enabled={true}/>;
}


export function ProjectFeatures() {
  return (
    <Feature name="projects">
      <ProjectDisplayFeature/>
      <ProjectCreateFeature/>
      <Feature name="assets"/>
    </Feature>
  );
}

ProjectFeatures.featureDeps = [
  AllProjectsQuery,
]