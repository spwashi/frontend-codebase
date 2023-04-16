import {Feature} from '@services/features/item/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleScenesLastFetched, selectPossibleScenesList} from '../services/redux/selectors';
import {AllScenesQuery} from '../services/graphql/all/components/FindAll';
import {feature_sceneDisplay, feature_scenes} from '../../../@/featureIds';

function SceneDisplayFeature() {
  const lastFetched = useSelector(selectPossibleScenesLastFetched)
  const list        = useSelector(selectPossibleScenesList)
  const enabled     = lastFetched ? !!list.length : false;
  return <Feature name={feature_sceneDisplay} enabled={enabled}/>;
}
export function SceneFeatures() {
  return (
    <Feature name={feature_scenes}>
      <SceneDisplayFeature/>
    </Feature>
  )
}

SceneFeatures.featureDeps =
  [
    AllScenesQuery,
  ]