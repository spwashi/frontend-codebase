import {Feature} from '@services/features/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleScenesLastFetched, selectPossibleScenesList} from '../services/redux/selectors';
import {AllScenesQuery} from '../services/graphql/all/components/FindAll';
import {sceneDisplayFeatureName, sceneFeatureName} from '@features/scenes/features';

function SceneDisplayFeature() {
  const lastFetched = useSelector(selectPossibleScenesLastFetched)
  const list        = useSelector(selectPossibleScenesList)
  const enabled     = lastFetched ? !!list.length : false;
  return (
    <Feature name={sceneDisplayFeatureName} enabled={enabled}/>
  );
}
export function SceneFeatures() {
  return (
    <Feature name={sceneFeatureName}>
      <SceneDisplayFeature/>
    </Feature>
  )
}

SceneFeatures.featureDeps =
  [
    AllScenesQuery,
  ]