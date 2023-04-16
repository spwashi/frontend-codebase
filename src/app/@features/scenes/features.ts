import {feature_sceneCreateForm, feature_sceneDisplay, feature_sceneEditForm, feature_scenes} from '../../@/featureIds';

export type ISceneFeatureNames =
  | typeof feature_scenes
  | typeof feature_sceneDisplay
  | typeof feature_sceneCreateForm
  | typeof feature_sceneEditForm