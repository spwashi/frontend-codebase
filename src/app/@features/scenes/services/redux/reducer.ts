import {combineReducers} from 'redux';
import {SceneFeatureState, SceneFeatureStateDataScenes} from './types';

export const ACTION_RECEIVE_ALL_SCENES = 'RECEIVE_ALL_SCENES';
export const ACTION_RECEIVE_ONE_SCENE  = 'RECEIVE_ONE_SCENE';
export const ACTION_DELETE_ONE_SCENE   = 'DELETE_ONE_SCENE';

export const sceneReducer =
               combineReducers<SceneFeatureState>(
                 {
                   enabled:  () => true,
                   features: (state = {}) => (state),
                   state:    (state = {key: 0, renderKey: 0}, action) => {
                     switch (action.type) {
                       case ACTION_DELETE_ONE_SCENE:
                       case ACTION_RECEIVE_ONE_SCENE:
                         return {...state, renderKey: state.renderKey + 1}
                       case ACTION_RECEIVE_ALL_SCENES:
                         return {...state, key: state.key + 1}
                     }
                     return state;
                   },
                   data:     combineReducers({
                                               scenes: (state: SceneFeatureStateDataScenes = {
                                                 lastFetched: null,
                                                 list:        [],
                                               }, action) => {
                                                 switch (action.type) {
                                                   case ACTION_DELETE_ONE_SCENE: {
                                                     const id = action.payload.id;
                                                     if (!id) return state;
                                                     return {
                                                       ...state,
                                                       list: (state.list ?? []).filter(scene => scene?.id !== id),
                                                     };
                                                   }
                                                   case ACTION_RECEIVE_ONE_SCENE: {
                                                     const id = action.payload.id;
                                                     if (!id) return state;
                                                     return {
                                                       ...state,
                                                       list: (state.list ?? []).map(scene => scene?.id !== id ? scene : action.payload),
                                                     }
                                                   }
                                                   case ACTION_RECEIVE_ALL_SCENES:
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