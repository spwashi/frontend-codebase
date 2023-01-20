import {combineReducers} from 'redux';
import {ConceptFeatureState, ConceptFeatureStateDataConcepts} from './types';

export const ACTION_RECEIVE_ALL_CONCEPTS = 'RECEIVE_ALL_CONCEPTS';
export const ACTION_RECEIVE_ONE_CONCEPT  = 'RECEIVE_ONE_CONCEPT';
export const ACTION_DELETE_ONE_CONCEPT   = 'DELETE_ONE_CONCEPT';

export const conceptReducer =
                 combineReducers<ConceptFeatureState>(
                     {
                         enabled:  (state, action) => true,
                         features: (state = {}, action) => (state),
                         state:    (state = {key: 0, renderKey: 0}, action) => {
                             switch (action.type) {
                                 case ACTION_DELETE_ONE_CONCEPT:
                                 case ACTION_RECEIVE_ONE_CONCEPT:
                                     return {...state, renderKey: state.renderKey + 1}
                                 case ACTION_RECEIVE_ALL_CONCEPTS:
                                     return {...state, key: state.key + 1}
                             }
                             return state;
                         },
                         data:     combineReducers({
                                                       concepts: (state: ConceptFeatureStateDataConcepts = {
                                                           lastFetched: null,
                                                           list:        [],
                                                       }, action) => {
                                                           switch (action.type) {
                                                               case ACTION_DELETE_ONE_CONCEPT: {
                                                                   const id = action.payload.id;
                                                                   if (!id) return state;
                                                                   return {
                                                                       ...state,
                                                                       list: (state.list ?? []).filter(concept => concept?.id !== id),
                                                                   };
                                                               }
                                                               case ACTION_RECEIVE_ONE_CONCEPT: {
                                                                   const id = action.payload.id;
                                                                   if (!id) return state;
                                                                   return {
                                                                       ...state,
                                                                       list: (state.list ?? []).map(concept => concept?.id !== id ? concept : action.payload),
                                                                   }
                                                               }
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