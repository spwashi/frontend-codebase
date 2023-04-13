import {IProject} from '../../../../../.junction/models/project/models';
import {SelectOption} from '../../../../.widgets/.form/.fields/components/input/select/SelectInput';
import {RootState} from '../../../../.services/.redux/rootState';
import {ProjectOption} from './types';


const projectToOption                          = (project: IProject): SelectOption & ProjectOption => ({
  title:   project.title,
  value:   project.title,
  payload: project,
});
export const selectProjectFeature              = (state: RootState) => state.features.project;
export const selectPossibleProjectsList        = (state: RootState) => {
  let projectList     = selectProjectFeature(state).data.projects.list;
  const activeProject = selectProjectStateProject(state);

  if (!projectList.length && activeProject) {
    projectList = [activeProject];
  }

  return projectList.map(projectToOption);
};
export const selectPossibleProjectsLastFetched = (state: RootState) => selectProjectFeature(state).data.projects.lastFetched;
export const selectProjectState                = (state: RootState) => selectProjectFeature(state).state;
export const selectProjectStateKey             = (state: RootState) => selectProjectFeature(state).state.key;
export const selectProjectStateProject         = (state: RootState) => selectProjectFeature(state).state.project;
