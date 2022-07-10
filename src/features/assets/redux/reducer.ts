import {combineReducers} from 'redux';
import {AssetFeatureState, AssetFeatureStateDataAssets} from './types';

export const assetReducer =
                 combineReducers<AssetFeatureState>(
                     {
                         enabled:  (state, action) => true,
                         features: (state = {}, action) => (state),
                         data:     combineReducers({
                                                       assets: (state: AssetFeatureStateDataAssets = {
                                                           lastFetched: null,
                                                           list:        [],
                                                       }, action) => {
                                                           return state;
                                                       },
                                                   }),
                     },
                 );