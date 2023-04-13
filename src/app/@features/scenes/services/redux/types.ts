import {SelectOption} from '@widgets/form/features/fields/components/input/select/SelectInput';
import {IScene} from '@junction/models/scene/models';
import {IFeatureState, IKeyedState} from '@services/redux/types/state.types';

export type SceneOption = SelectOption<IScene>;
export type SceneFeatureStateDataScenes = { list: IScene[]; lastFetched: number | null };
export type SceneFeatureData = { scenes: SceneFeatureStateDataScenes };
export type SceneFeatureState =
  IFeatureState<SceneFeatureData>
  & IKeyedState<{ renderKey: number }>;