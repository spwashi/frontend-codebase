import {IProject} from '../../../../../.junction/models/project/models';
import {SelectOption} from '../../../../_widgets/form/_features/fields/components/input/select/SelectInput';
import {IRootAppState} from '../../../../types/IRootAppState';
import {ProjectOption} from './types';


const projectToOption                          = (project: IProject): SelectOption & ProjectOption => ({
  title:   project.title,
  value:   project.title,
  payload: project,
});
export const selectProjectFeature              = (state: IRootAppState) => state.features.project;
export const selectPossibleProjectsList        = (state: IRootAppState) => {
  let projectList     = selectProjectFeature(state).data.projects.list;
  const activeProject = selectProjectStateProject(state);

  if (!projectList.length && activeProject) {
    projectList = [activeProject];
  }

  return projectList.map(projectToOption);
};
export const selectPossibleProjectsLastFetched = (state: IRootAppState) => selectProjectFeature(state).data.projects.lastFetched;
export const selectProjectState                = (state: IRootAppState) => selectProjectFeature(state).state;
export const selectProjectStateKey             = (state: IRootAppState) => selectProjectFeature(state).state.key;
export const selectProjectStateProject         = (state: IRootAppState) => selectProjectFeature(state).state.project;
