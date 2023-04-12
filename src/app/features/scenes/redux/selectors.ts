import {IScene} from '../../../../.junction/models/scene/models';
import {SceneOption} from './types';
import {RootState} from '../../../redux/rootState';

function sceneToOption(scene: IScene): SceneOption {
  return {
    title:   scene.title ?? scene.name,
    value:   scene.name,
    payload: scene,
  };
}

export const selectSceneFeature              = (state: RootState) => state.features.scene;
export const selectPossibleScenesList        = (state: RootState) => selectSceneFeature(state).data.scenes.list?.map(sceneToOption);
export const selectPossibleScenesLastFetched = (state: RootState) => selectSceneFeature(state).data.scenes.lastFetched;
export const selectSceneStateKey             = (state: RootState) => selectSceneFeature(state).state.key;