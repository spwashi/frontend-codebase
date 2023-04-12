import {combineReducers} from 'redux';
import {TagFeatureState, TagFeatureStateDataTags} from './types';

export const ACTION_RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const ACTION_TAG_CREATED      = 'TAG_CREATED';

export const tagReducer =
               combineReducers<TagFeatureState>(
                 {
                   enabled:  (state, action) => true,
                   features: (state = {}, action) => (state),
                   state:    (state = {key: 0}, action) => {
                     switch (action.type) {
                       case ACTION_TAG_CREATED:
                         return {...state, key: state.key + 1}
                     }
                     return state;
                   },
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