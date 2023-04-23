import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { IFeatureState, IKeyedState } from "@services/redux/types/state.types";
import { Scene } from '@generated/graphql';

export type SceneOption = SelectOption<Scene["id"]>;
export type SceneFeatureStateDataScenes = {
  list: Scene[];
  lastFetched: number | null;
};
export type SceneFeatureData = { scenes: SceneFeatureStateDataScenes };
export type SceneFeatureState = IFeatureState<SceneFeatureData> &
  IKeyedState<{ renderKey: number }>;
