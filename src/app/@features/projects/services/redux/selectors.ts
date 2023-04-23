import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { IRootAppState } from "@core/types/IRootAppState";
import { Project } from '@generated/graphql';
import { ProjectOption } from "./types";

const projectToOption = (project: Project): SelectOption & ProjectOption => ({
  title: project.title,
  value: project.id,
  payload: project.id,
});
export const selectProjectFeature = (state: IRootAppState) =>
  state.features.project;
export const selectPossibleProjectOptions = (state: IRootAppState) => {
  let projectList = selectProjectFeature(state).data.projects.list;
  const activeProject = selectProjectStateProject(state);
  if (!projectList.length && activeProject) {
    projectList = [activeProject];
  }

  return projectList.map(projectToOption);
};
export const selectPossibleProjectsLastFetched = (state: IRootAppState) =>
  selectProjectFeature(state).data.projects.lastFetched;
export const selectProjectState = (state: IRootAppState) =>
  selectProjectFeature(state).state;
export const selectProjectStateKey = (state: IRootAppState) =>
  selectProjectFeature(state).state.key;
export const selectProjectStateProject = (state: IRootAppState) =>
  selectProjectFeature(state).state.project;
