import {combineReducers} from 'redux';
import {ProjectFeatureState, ProjectFeatureStateDataProjects} from '../../../../redux/state.types';

export const ACTION_RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';

export const projectReducer =
                 combineReducers<ProjectFeatureState>(
                     {
                         enabled:  (state, action) => true,
                         features: (state = {}, action) => (state),
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