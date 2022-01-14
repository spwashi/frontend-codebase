import {ProjectOption, RootState} from '../../../redux/state.types';
import {IProject} from '../../../models/project/models';
import {SelectOption} from '../../../components/form/input/select/SelectInput';

const projectToOption                          = (project: IProject): SelectOption & ProjectOption => ({
    title: project.title,
    value: project.title,
    project,
});
export const selectProjectFeature              = (state: RootState) => state.features.project;
export const selectPossibleProjectsList        = (state: RootState) => selectProjectFeature(state).data.projects.list.map(projectToOption);
export const selectPossibleProjectsLastFetched = (state: RootState) => selectProjectFeature(state).data.projects.lastFetched;
export const selectProjectStateKey             = (state: RootState) => selectProjectFeature(state).state.key;
export const selectProjectStateProject         = (state: RootState) => selectProjectFeature(state).state.project;
