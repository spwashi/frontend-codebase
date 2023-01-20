import {IProject} from '../../../../junction/models/project/models';
import {Feature, KeyedState} from '../../../redux/state.types';
import {SelectOption} from '../../../components/form/input/select/SelectInput';

export type ProjectOption = SelectOption<IProject>;
export type ProjectFeatureStateDataProjects = { list: IProject[]; lastFetched: number | null }
export type ProjectFeatureData = { projects: ProjectFeatureStateDataProjects };
export type ProjectFeatureState =
    Feature<ProjectFeatureData>
    & KeyedState<{ project?: IProject }>;