import {IProject} from '@junction/models/project/models';
import {IFeatureState, IKeyedState} from '@services/redux/types/state.types';
import {SelectOption} from '@widgets/form/features/fields/components/input/select/SelectInput';

export type ProjectOption = SelectOption<IProject>;
export type ProjectFeatureStateDataProjects = { list: IProject[]; lastFetched: number | null }
export type ProjectFeatureData = { projects: ProjectFeatureStateDataProjects };
export type ProjectFeatureState =
  IFeatureState<ProjectFeatureData>
  & IKeyedState<{ project?: IProject }>;