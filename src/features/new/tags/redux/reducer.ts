import {combineReducers} from 'redux';
import {TagFeatureState, TagFeatureStateDataTags} from '../../../../redux/state.types';

export const ACTION_RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';

export const tagReducer =
                 combineReducers<TagFeatureState>(
                     {
                         enabled:  (state, action) => true,
                         features: (state = {}, action) => (state),
                         data:     combineReducers({
                                                       tags: (state: TagFeatureStateDataTags = {
                                                           lastFetched: null,
                                                           list:        [],
                                                       }, action) => {
                                                           switch (action.type) {
                                                               case ACTION_RECEIVE_ALL_TAGS:
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