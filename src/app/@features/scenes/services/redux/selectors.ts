import { IScene } from "@junction/models/scene/models";
import { IRootAppState } from "@core/types/IRootAppState";
import { SceneOption } from "./types";

function sceneToOption(scene: IScene): SceneOption {
  return {
    title: scene.title ?? scene.name,
    value: scene.name,
    payload: scene,
  };
}

export const selectSceneFeature = (state: IRootAppState) =>
  state.features.scene;
export const selectPossibleScenesList = (state: IRootAppState) =>
  selectSceneFeature(state).data.scenes.list?.map(sceneToOption);
export const selectPossibleScenesLastFetched = (state: IRootAppState) =>
  selectSceneFeature(state).data.scenes.lastFetched;
export const selectSceneStateKey = (state: IRootAppState) =>
  selectSceneFeature(state).state.key;
