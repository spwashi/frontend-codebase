import {Feature} from '@services/features/item/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleScenesLastFetched, selectPossibleScenesList} from '../services/redux/selectors';
import {ListQuery} from '@features/scenes/services/graphql/list/components/ListQuery';
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
    ListQuery,
  ]