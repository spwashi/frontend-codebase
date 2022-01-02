import {RootState} from '../../../../redux/state.types';

export const selectProjectFeature              = (state: RootState) => state.features.project;
export const selectPossibleProjectsList        = (state: RootState) => selectProjectFeature(state).data.projects.list;
export const selectPossibleProjectsLastFetched = (state: RootState) => selectProjectFeature(state).data.projects.lastFetched;