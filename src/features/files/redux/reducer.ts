import {combineReducers} from 'redux';
import {FileFeatureState, FileFeatureStateDataFiles} from './types';

export const fileReducer =
                 combineReducers<FileFeatureState>(
                     {
                         enabled:  (state, action) => true,
                         features: (state = {}, action) => (state),
                         data:     combineReducers({
                                                       files: (state: FileFeatureStateDataFiles = {
                                                           lastFetched: null,
                                                           list:        [],
                                                       }, action) => {
                                                           return state;
                                                       },
                                                   }),
                     },
                 );