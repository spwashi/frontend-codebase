import {
  featureId__sceneCreateForm,
  featureId__sceneDisplay,
  featureId__sceneEditForm,
  featureId__scenes,
} from "@/features/ids";

export type ISceneFeatureID =
  | typeof featureId__scenes
  | typeof featureId__sceneDisplay
  | typeof featureId__sceneCreateForm
  | typeof featureId__sceneEditForm;
