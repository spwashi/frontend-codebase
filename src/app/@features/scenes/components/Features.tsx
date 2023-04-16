import {Feature} from '@services/features/item/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleScenesLastFetched, selectPossibleScenesList} from '../services/redux/selectors';
import {SceneListQuery} from '../services/graphql/all/components/FindAll';
import {featureId__sceneDisplay, featureId__scenes} from '../../../@/featureIds';

function SceneDisplayFeature() {
  const lastFetched = useSelector(selectPossibleScenesLastFetched)
  const list        = useSelector(selectPossibleScenesList)
  const enabled     = lastFetched ? !!list.length : false;
  return <Feature name={featureId__sceneDisplay} enabled={enabled}/>;
}
export function SceneFeatures() {
  return (
    <Feature name={featureId__scenes}>
      <SceneDisplayFeature/>
    </Feature>
  )
}

SceneFeatures.featureDeps =
  [
    SceneListQuery,
  ]