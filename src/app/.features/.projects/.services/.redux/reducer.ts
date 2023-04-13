import {combineReducers} from 'redux';
import {ProjectFeatureState, ProjectFeatureStateDataProjects} from './types';
import {REHYDRATE} from 'redux-persist';
import {selectProjectState} from './selectors';

export const ACTION_RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const ACTION_PROJECT_CREATED      = 'PROJECT_CREATED';
export const ACTION_PROJECT_SELECTED     = 'PROJECT_SELECTED';

export const projectReducer =
               combineReducers<ProjectFeatureState>(
                 {
                   enabled:  (state, action) => true,
                   features: (state = {}, action) => (state),
                   state:    (state = {key: 0}, action) => {
                     switch (action.type) {
                       case ACTION_PROJECT_SELECTED:
                         const project = action.payload.project;
                         return {...state, project}
                       case ACTION_PROJECT_CREATED:
                         return {...state, key: state.key + 1};
                       case REHYDRATE:
                         return selectProjectState(action.payload);
                     }
                     return state;
                   },
                   data:     combineReducers({
                                               projects: (state: ProjectFeatureStateDataProjects = {
                                                 lastFetched: null,
                                                 list:        [],
                                               }, action) => {
                                                 switch (action.type) {
                                                   case ACTION_RECEIVE_ALL_PROJECTS:
                                                     return {
                                                       ...state,
                                                       list:        action.payload,
                                                       lastFetched: Date.now(),
                                                     }
                                                 }
                                                 return state;
                                               },
                                             }),
                 },
               );