import {SelectOption} from '../../../components/form/input/select/SelectInput';
import {IScene} from '../../../models/scene/models';
import {Feature, KeyedState} from '../../../redux/state.types';

export type SceneOption = SelectOption<IScene>;
export type SceneFeatureStateDataScenes = { list: IScene[]; lastFetched: number | null };
export type SceneFeatureData = { scenes: SceneFeatureStateDataScenes };
export type SceneFeatureState = Feature<SceneFeatureData> & KeyedState<{renderKey: number}>;