import {Feature} from '../components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleScenesLastFetched, selectPossibleScenesList} from './redux/selectors';
import {AllScenesQuery} from './components/graphql/all/components/FindAll';

function SceneDisplayFeature() {
  const lastFetched = useSelector(selectPossibleScenesLastFetched)
  const list        = useSelector(selectPossibleScenesList)
  return <Feature name="scenes.display" enabled={lastFetched ? !!list.length : false}/>;
}
export function SceneFeatures() {
  return (
    <Feature name="scenes">
      <SceneDisplayFeature/>
    </Feature>
  )
}

SceneFeatures.featureDeps =
  [
    AllScenesQuery,
  ]