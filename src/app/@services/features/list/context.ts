import {createContext} from 'react';
import {IFeatureRegistrationContext} from './types';
import {getInitialFeaturesRegistrationContextState} from '@services/features/list/helpers/getInitialState';


/**
 * Describes a collection of states about features
 */
export const FeaturesRegistrationContext =
  createContext(
    {
      state:    {
        features: getInitialFeaturesRegistrationContextState(),
      },
      dispatch: () => {
        console.log('dispatched')
      },
    } as IFeatureRegistrationContext,
  );