import {combineReducers} from 'redux';
import {ConceptFeatureState, ConceptFeatureStateDataConcepts} from '../../../redux/state.types';

export const ACTION_RECEIVE_ALL_CONCEPTS = 'RECEIVE_ALL_CONCEPTS';

export const conceptReducer =
                 combineReducers<ConceptFeatureState>(
                     {
                         enabled:  (state, action) => true,
                         features: (state = {}, action) => (state),
                         data:     combineReducers({
                                                       concepts: (state: ConceptFeatureStateDataConcepts = {
                                                           lastFetched: null,
                                                           list:        [],
                                                       }, action) => {
                                                           switch (action.type) {
                                                               case ACTION_RECEIVE_ALL_CONCEPTS:
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