import {IProject} from '../../../app/junction/models/project/models';
import {SelectOption} from '../../../components/form/input/select/SelectInput';
import {RootState} from '../../../redux/rootState';
import {ProjectOption} from './types';

const projectToOption                          = (project: IProject): SelectOption & ProjectOption => ({
    title:   project.title,
    value:   project.title,
    payload: project,
});
export const selectProjectFeature              = (state: RootState) => state.features.project;
export const selectPossibleProjectsList        = (state: RootState) => selectProjectFeature(state).data.projects.list.map(projectToOption);
export const selectPossibleProjectsLastFetched = (state: RootState) => selectProjectFeature(state).data.projects.lastFetched;
export const selectProjectStateKey             = (state: RootState) => selectProjectFeature(state).state.key;
export const selectProjectStateProject         = (state: RootState) => selectProjectFeature(state).state.project;
