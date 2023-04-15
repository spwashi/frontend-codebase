import {IFeatureRegistrationContextAction, IFeatureRegistrationContextState} from './types';

export const featuresReducer =
               (state: IFeatureRegistrationContextState, action: IFeatureRegistrationContextAction) => {
                 switch (action.type) {
                   case 'UNREGISTER':
                   case 'REGISTER':
                     return {
                       ...state,
                       features: {
                         ...state.features,
                         available: {
                           ...state.features.available,
                           [action.payload.featureName]: action.type === 'REGISTER',
                         },
                       },
                     }
                   default:
                     return state;
                 }
               }