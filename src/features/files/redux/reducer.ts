import {combineReducers} from 'redux';
import {FileFeatureState, FileFeatureStateDataFiles} from '../../../redux/state.types';

export const ACTION_RECEIVE_ALL_FILES = 'RECEIVE_ALL_FILES';

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
                                                           switch (action.type) {
                                                               case ACTION_RECEIVE_ALL_FILES:
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